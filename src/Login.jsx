import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { useSignIn, useSignUp } from "@clerk/clerk-react"; // Import Clerk hooks
import "./css/login.css"; // Keep your existing CSS

function Login() {
  const navigate = useNavigate();
  const { isLoaded: signInLoaded, signIn, setActive } = useSignIn();
  const { isLoaded: signUpLoaded, signUp } = useSignUp();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isSignUpMode, setIsSignUpMode] = useState(false); // New state to toggle between login and signup
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Manual Login Flow with Clerk
  const handleManualLogin = async (event) => {
    event.preventDefault();
    if (!signInLoaded) {
      return;
    }

    try {
      const result = await signIn.create({
        identifier: email,
        password,
      });

      if (result.status === "complete") {
        await setActive({ session: result.createdSessionId });
        navigate("/dashboard");
      } else {
        console.log(result);
      }
    } catch (err) {
      console.error("Clerk Login error:", JSON.stringify(err, null, 2));
      setErrorMessage(err.errors[0]?.longMessage || "An unknown error occurred during login.");
    }
  };

  // Manual Sign Up Flow with Clerk
  const handleManualSignUp = async (e) => {
    e.preventDefault();
    if (!signUpLoaded) {
      return;
    }

    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match.");
      return;
    }

    try {
      const result = await signUp.create({
        emailAddress: email,
        password,
      });

      if (result.status === "complete") {
        await setActive({ session: result.createdSessionId });
        alert("Signup successful!");
        navigate("/dashboard");
      } else {
        console.log(result);
      }
    } catch (err) {
      console.error("Clerk Signup error:", JSON.stringify(err, null, 2));
      setErrorMessage(err.errors[0]?.longMessage || "An unknown error occurred during signup.");
    }
  };

  // Clerk's automatic social login flows
  const handleClerkSocialSignIn = async (strategy) => {
    if (!signInLoaded) return;
    try {
      const result = await signIn.authenticateWithRedirect({
        strategy,
        redirectUrl: "/sso-callback",
        redirectUrlComplete: "/dashboard",
      });
    } catch (err) {
      console.error("Clerk social sign-in error:", JSON.stringify(err, null, 2));
      setErrorMessage(err.errors[0]?.longMessage || "An unknown error occurred during social sign-in.");
    }
  };

  return (
    <div className="eduretrieve-container">
      <div className="left-panel">
        <img src="public/eduretrieve-logo.png" alt="EdureTrieve Logo" className="logo-img" />
        <h2>Welcome to EndureTrieve!</h2>
        <button onClick={() => navigate('/dashboard')}>dashboard</button>
      </div>

      <div className="right-panel">
        <div className="login-card">
          <h2 className="login-title">{isSignUpMode ? "Sign Up" : "Log In"}</h2>

          {isSignUpMode ? (
            <form className="signup-form" onSubmit={handleManualSignUp}>
              <input
                type="text"
                placeholder="Username"
                className="signup-input"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="signup-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              <div className="password-fields">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  className="signup-input"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <span
                  className="eye-icons"
                  onMouseDown={() => setShowPassword(true)}
                  onMouseUp={() => setShowPassword(false)}
                  onMouseLeave={() => setShowPassword(false)}
                  onTouchStart={() => setShowPassword(true)}
                  onTouchEnd={() => setShowPassword(false)}
                >
                  {showPassword ? <FiEye /> : <FiEyeOff />}
                </span>
              </div>

              <div className="password-fields">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm password"
                  className="signup-input"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
                <span
                  className="eye-icons"
                  onMouseDown={() => setShowConfirmPassword(true)}
                  onMouseUp={() => setShowConfirmPassword(false)}
                  onMouseLeave={() => setShowConfirmPassword(false)}
                  onTouchStart={() => setShowConfirmPassword(true)}
                  onTouchEnd={() => setShowConfirmPassword(false)}
                >
                  {showConfirmPassword ? <FiEye /> : <FiEyeOff />}
                </span>
              </div>

              {errorMessage && <p className="error-message">{errorMessage}</p>}

              <button type="submit" className="login-button">Sign up</button>
              <p className="signup-link">
                Already have an account? <a onClick={() => { setIsSignUpMode(false); setErrorMessage(""); setEmail(""); setPassword(""); setConfirmPassword(""); }}>Login here.</a>
              </p>
            </form>
          ) : (
            <form className="login-form" onSubmit={handleManualLogin}>
              <input
                type="email"
                placeholder="Email Address"
                className="login-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <div className="password-fields">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  className="login-input"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <span
                  className="eye-icons"
                  onMouseDown={() => setShowPassword(true)}
                  onMouseUp={() => setShowPassword(false)}
                  onMouseLeave={() => setShowPassword(false)}
                  onTouchStart={() => setShowPassword(true)}
                  onTouchEnd={() => setShowPassword(false)}
                >
                  {!showPassword ? <FiEyeOff /> : <FiEye />}
                </span>
              </div>

              <a href="/forgot-password" className="forgot-password">Forgot your password?</a>
              <button type="submit" className="login-button">Log in</button>
              <p className="signup-link">
                Don’t have an account? <a onClick={() => { setIsSignUpMode(true); setErrorMessage(""); setEmail(""); setPassword(""); setConfirmPassword(""); }}>Sign up.</a>
              </p>
            </form>
          )}

          <div className="social-buttons">
            <button className="btn social-btn" onClick={() => handleClerkSocialSignIn('oauth_google')}>
              <img src="public/google.png" alt="Google" className="social-img" />
            </button>
            <button className="btn social-btn" onClick={() => handleClerkSocialSignIn('oauth_facebook')}>
              <img src="public/facebook.png" alt="Facebook" className="social-img" />
            </button>
            <button className="btn social-btn" onClick={() => handleClerkSocialSignIn('oauth_apple')}>
              <img src="public/apple.png" alt="Apple" className="social-img" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;