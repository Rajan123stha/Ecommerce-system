import { Link } from "react-router-dom";
import "./Login.css";
import Button from "../../Components/Button";
export default function Login() {
  return (
    <div className="login-container">
      <div className="login">
        <h3 className="log-heading">Log in</h3>
        <p className="log-message">Sign in to access your account!</p>
        <div className="login-form">
          <form>
            <div className="login-label">Email Address</div>
            <input
              type="text"
              className="input-section"
              placeholder="your@gmail.com"
            />
            <div className="login-label">Password</div>
            <input
              type="password"
              className="input-section"
              placeholder="Your Password"
            />
            <div className="forgot-p">
              <Link className="forgot-pass" to="/forgot-password">
                Forgot Password?
              </Link>

              <Button className="signup-b" title="Sign In" />
            </div>
          </form>
          <div className="signup-option">
            Don't have an account?
            <Link to="/signup" className="signup">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
