import nextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { redirect } from "next/navigation";

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
          res = res.data;

          const user = { name: JSON.stringify(res), email: res.email };

          return user;
        } catch (error) {
          console.log("🔥 error loggin in", error);
          return null;
        }
      },
    }),
  ],

  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const onDashboard = nextUrl.pathname.startsWith("/dashboard");

      if (onDashboard) {
        if (isLoggedIn) return true;
        return false;
      }
      if (isLoggedIn) return Response.redirect(new URL("/dashboard", nextUrl));

      return isLoggedIn;
    },

    async session({ session }) {
      try {
        const { user: body } = session;
        const dbUser = JSON.parse(body.name);
        const user = {
          name: dbUser.fullName,
          email: dbUser.email,
          id: dbUser.id,
          username: dbUser.username,
          studentId: dbUser.studentId,
        };

        session.user = user;
        return session;
      } catch (error) {
        console.log("🔥 callback session", error);
      }
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
