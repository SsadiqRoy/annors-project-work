import nextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

const nextConfig = {
  secret: process.env.AUTH_SECRET,
  providers: [
    Credentials({
      name: "Credentials",
      async authorize(credentials) {
        try {
          let res = await fetch(process.env.AUTH_CREDENTIAL_ENDPOINT, {
            method: "POST",
            body: JSON.stringify(credentials),
            headers: {
              "Content-Type": "Application/json",
            },
          });
          res = await res.json();

          return res.data;
        } catch (error) {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      console.log("👍 isLoggedIn", auth);
      const isLoggedIn = !!auth?.user;
      const onDashboard = nextUrl.pathname.startsWith("/dashboard");

      if (onDashboard) {
        if (isLoggedIn) return true;
        return false;
      }
      if (isLoggedIn) return Response.redirect(new URL("/dashboard", nextUrl));

      return isLoggedIn;
    },
  },
  pages: {
    signIn: "/login",
  },
};

export const {
  auth,
  signIn,
  signOut,
  handlers: { GET, POST },
} = nextAuth(nextConfig);
