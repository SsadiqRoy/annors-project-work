import LoginForm from "../_sections/LoginForm";

export default function Login() {
  return (
    <div className="login">
      <div className="login-overlay">
        <div className="login-container">
          <div className="login-logo">
            <img src="/images/knust-logo.png" alt="KNUST logo" />
          </div>

          <LoginForm />
        </div>
      </div>
    </div>
  );
}
