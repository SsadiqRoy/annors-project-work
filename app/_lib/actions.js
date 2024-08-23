"use server";

import { signIn } from "./auth";

export async function loginAction(data) {
  await signIn("credentials", data, { redirectTo: "/dashboard" });
}
