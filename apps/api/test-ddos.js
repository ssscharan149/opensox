#!/usr/bin/env node

/**
 * DDOS Prevention Test Script (Node.js version)
 * Tests rate limiting and IP blocking mechanisms
 */

const API_URL = "http://localhost:4000";

// Color codes for terminal output
const colors = {
  reset: "\x1b[0m",
  blue: "\x1b[34m",
  green: "\x1b[32m",
  red: "\x1b[31m",
  yellow: "\x1b[33m",
};

const log = {
  info: (msg) => console.log(`${colors.blue}${msg}${colors.reset}`),
  success: (msg) => console.log(`${colors.green}${msg}${colors.reset}`),
  error: (msg) => console.log(`${colors.red}${msg}${colors.reset}`),
  warning: (msg) => console.log(`${colors.yellow}${msg}${colors.reset}`),
};

async function makeRequest(url, showDetails = false) {
  try {
    const response = await fetch(url);
    const data = await response.text();
    
    if (showDetails && response.status !== 200) {
      try {
        const json = JSON.parse(data);
        return { status: response.status, data: json };
      } catch {
        return { status: response.status, data };
      }
    }
    
    return { status: response.status, data };
  } catch (error) {
    return { status: 0, error: error.message };
  }
}

async function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function testServerRunning() {
  log.warning("📡 Test 1: Checking if server is running...");
  const result = await makeRequest(`${API_URL}/test`);
  
  if (result.status === 0) {
    log.error("❌ Server is not running on port 4000");
    log.error("Please start the server with: cd apps/api && pnpm dev");
    process.exit(1);
  }
  
  log.success("✅ Server is running");
  console.log("");
}

async function testNormalRequests() {
  log.warning("📊 Test 2: Sending 10 normal requests with delays...");
  let success = 0;
  
  for (let i = 1; i <= 10; i++) {
    const result = await makeRequest(`${API_URL}/test`);
    console.log(`Request ${i}: HTTP ${result.status}`);
    
    if (result.status === 200) success++;
    await sleep(100); // 100ms delay between requests
  }
  
  log.success(`✅ All ${success}/10 requests succeeded`);
  console.log("");
}

async function testRateLimiting() {
  log.warning("📊 Test 3: Testing Express rate limiter (40 rapid requests)...");
  const results = { success: 0, blocked: 0 };
  
  const promises = Array.from({ length: 40 }, (_, i) =>
    makeRequest(`${API_URL}/test`).then((result) => {
      if (result.status === 429 || result.status === 403) {
        results.blocked++;
        if (results.blocked === 1) {
          log.error(`Request ${i + 1}: HTTP ${result.status} (RATE LIMITED)`);
          console.log("Response:", result.data);
        }
      } else if (result.status === 200) {
        results.success++;
      }
      
      // Show progress every 10 requests
      if ((i + 1) % 10 === 0) {
        console.log(`Progress: ${i + 1}/40 (Success: ${results.success}, Blocked: ${results.blocked})`);
      }
    })
  );
  
  await Promise.all(promises);
  
  console.log("");
  log.success(`✅ Success: ${results.success} | ❌ Blocked: ${results.blocked}`);
  console.log("");
}

async function testIPBlocker() {
  log.warning("📊 Test 4: Testing IP blocker (100 very rapid requests)...");
  const results = { success: 0, blocked: 0, ipBlocked: 0 };
  
  for (let i = 1; i <= 100; i++) {
    const result = await makeRequest(`${API_URL}/trpc/hello.test?input=%7B%22name%22%3A%22test%22%7D`, true);
    
    if (result.status === 403) {
      results.ipBlocked++;
      if (results.ipBlocked === 1) {
        log.error(`\nIP BLOCKED at request ${i}!`);
        console.log("Response:", result.data);
      }
    } else if (result.status === 429) {
      results.blocked++;
    } else if (result.status === 200) {
      results.success++;
    }
    
    // Show progress every 20 requests
    if (i % 20 === 0) {
      console.log(`Progress: ${i}/100 (Success: ${results.success}, Rate Limited: ${results.blocked}, IP Blocked: ${results.ipBlocked})`);
    }
    
    // No delay - testing rapid requests
  }
  
  console.log("");
  log.success(`✅ Success: ${results.success}`);
  log.warning(`⚠️  Rate Limited (429): ${results.blocked}`);
  log.error(`🚫 IP Blocked (403): ${results.ipBlocked}`);
  console.log("");
}

async function checkBlockedIPs() {
  log.warning("📊 Test 5: Checking blocked IPs...");
  const result = await makeRequest(`${API_URL}/admin/blocked-ips`);
  
  if (result.status === 200) {
    try {
      const data = JSON.parse(result.data);
      console.log(JSON.stringify(data, null, 2));
      
      if (data.blockedIPs && data.blockedIPs.length > 0) {
        log.error(`\n🚫 ${data.blockedIPs.length} IP(s) currently blocked`);
        data.blockedIPs.forEach((ip) => {
          console.log(`   IP: ${ip.ip}`);
          console.log(`   Reason: ${ip.reason}`);
          console.log(`   Blocked until: ${ip.blockedUntil}`);
        });
      } else {
        log.success("✅ No IPs currently blocked");
      }
    } catch (e) {
      console.log(result.data);
    }
  }
  console.log("");
}

async function main() {
  log.info("🧪 Testing DDOS Prevention Mechanisms");
  console.log("==========================================");
  console.log("");
  
  await testServerRunning();
  await testNormalRequests();
  await testRateLimiting();
  
  // Wait 1 second before IP blocker test
  log.warning("⏳ Waiting 1 second before IP blocker test...");
  await sleep(1000);
  console.log("");
  
  await testIPBlocker();
  await checkBlockedIPs();
  
  console.log("==========================================");
  log.info("📝 Expected Behavior:");
  console.log("  • Express rate limiter: blocks after 30 requests/15min");
  console.log("  • IP blocker: blocks after 70 requests/1min");
  console.log("  • Blocked IPs: remain blocked for 24 hours");
  console.log("");
  log.success(`🔍 View blocked IPs: ${API_URL}/admin/blocked-ips`);
  console.log("");
}

main().catch((error) => {
  log.error("Error running tests:");
  console.error(error);
  process.exit(1);
});