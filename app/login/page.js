import Link from "next/link";
import { loginAction } from "../_lib/actions";

export default function Login() {
  return (
    <div className="login">
      <div className="login-overlay">
        <div className="login-container">
          <div className="login-logo">
            <img src="/images/knust-logo.png" alt="KNUST logo" />
          </div>

          <form className="login-form" action={loginAction}>
            <div className="login-form-cover">
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
                <button className="btn btn-full btn-green">Login</button>
              </div>

              <div className="form-group">
                <p class="login-issues">
                  Having issues accessing your voting site? <Link href="#">Contact Us</Link>
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
