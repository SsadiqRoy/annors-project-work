import Link from "next/link";

export default function ErrorPage({ error, remedy }) {
  return (
    <div className="error">
      <div className="error-box">
        <h3>{error}</h3>
        <p>{remedy || ""}</p>

        <div className="error-box-links">
          <a href="/login" className="btn btn-normal btn-green">
            Login
          </a>
          <a href="/dashboard" className="btn btn-normal btn-green">
            Dashboard
          </a>
        </div>
      </div>
    </div>
  );
}
