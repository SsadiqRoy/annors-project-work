"use client";
import Link from "next/link";
import { ButtonFull } from "../_components/miniComps";
import { loginAction } from "../_lib/actions";
import { useFormState } from "react-dom";

export default function LoginForm() {
  const [state, formAction] = useFormState(loginAction, null);

  return (
    <form className="login-form" action={formAction}>
      <div className="login-form-cover">
        {state?.error && (
          <div className="login-form-error">
            <p>{state.error.message}</p>
          </div>
        )}
        <div className="login-form-heading">
          <h2>Login</h2>
        </div>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" required />
        </div>
        <div className="form-group">
          <label htmlFor="studeint-id">studeint id</label>
          <input type="text" id="studeint-id" name="studentId" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">password</label>
          <input type="password" id="password" name="password" required />
        </div>

        <div className="form-group">
          <ButtonFull text="Submit" />
        </div>

        <div className="form-group">
          <p className="login-issues">
            Having issues accessing your voting site? <Link href="#">Contact Us</Link>
          </p>
        </div>
      </div>
    </form>
  );
}
