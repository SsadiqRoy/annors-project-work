"use server";

import { redirect } from "next/navigation";
import { signIn, signOut } from "./auth";
import { isRedirectError } from "next/dist/client/components/redirect";

export async function loginAction(state, data) {
  try {
    await signIn("credentials", data);

    redirect("/dashboard");
  } catch (error) {
    if (isRedirectError(error)) {
      redirect("/dashboard");
    } else if (error.type === "CredentialsSignin") {
      return { error: { message: "Wrong Credentials" } };
    } else {
      console.log("🔥 loginAction", error);
      return error;
    }
  }
}

export async function logoutAction() {
  await signOut({ redirectTo: "/login" });
}
