"use client";
import ErrorPage from "./_sections/Error";

export default function Page({ error }) {
  console.log(error);

  return <ErrorPage error={error.message || "Something went wrong"} />;
}
