import { PrismaClient } from "@prisma/client";
import dotenv from "dotenv";

dotenv.config();

const prisma = new PrismaClient({
  datasources: {
    db: {
      url: process.env.DATABASE_URL,
    },
  },
  // Add connection limits
  log: ['error', 'warn'],
  // Add query timeout
  // Note: Prisma doesn't directly support query timeouts, but we can handle this at the application level
});

// Add a timeout wrapper for database operations
const withTimeout = async <T>(
  operation: Promise<T>,
  timeoutMs: number = 5000
): Promise<T> => {
  const timeoutPromise = new Promise<never>((_, reject) => {
    setTimeout(() => reject(new Error('Database operation timed out')), timeoutMs);
  });

  return Promise.race([operation, timeoutPromise]);
};

// Export the enhanced prisma client
export { withTimeout };
export default prisma;
