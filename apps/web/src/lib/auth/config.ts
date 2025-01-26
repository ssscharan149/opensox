import type { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authConfig: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async signIn({ user, profile }) {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/auth/google`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              email: user.email,
              firstName: profile?.name,
              authMethod: "google",
            }),
          }
        );
        if (!response.ok) throw new Error("Failed to save user");
        return true;
      } catch (error) {
        console.error("Sign-in error:", error);
        return false;
      }
    },

    async session({ session, token }) {
      return {
        ...session,
        accessToken: token.accessToken,
        expires: session.expires,
      };
    },

    async jwt({ token, account }) {
      if (account) {
        token.accessToken = account.access_token;
      }
      return token;
    },
  },
  pages: {
    signIn: "/login",
  },
};
