import { Link } from "react-router-dom";
import Button from "../../Components/Button";
import Input from "../../Components/InputBox";
export default function Signup(props) {
  return (
    <div className="login-container">
      <div className="login">
        <h3 className="log-heading">Sign Up</h3>
        <p className="log-message">
          Sign up now to get personalized information!
        </p>
        <div className="login-form">
          <form>
            <Input
              label="Email Address"
              type="email"
              placeholder="your@gmail.com"
            />
            <Input
              label="Password"
              type="password"
              placeholder="Your Password"
            />
            <Input label="Mobile Number" type="number" placeholder="" />
            <div className="forgot-p">
              <Button className="signup-b" title="Sign Up" />
            </div>
          </form>
          <div className="signup-option">
            Already have an account?
            <Link to="/login" className="signup">
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
