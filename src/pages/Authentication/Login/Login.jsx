import { Link, useNavigate } from "react-router-dom";
import "../authentication.css";
import { loginService } from "../../../services";
import { useState } from "react";
import { useAuth } from "../../../context";

const Login = () => {
  const navigate = useNavigate();
  const { authDispatch } = useAuth();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const guestUserCredential = {
    email: "adarshbalika@gmail.com",
    password: "adarshBalika123",
  };

  const changeHandler = (e) => {
    const { id, value } = e.target;
    setUser({ ...user, [id]: value });
  };

  const guestUserHandler = (event) => {
    event.preventDefault();
    setUser(guestUserCredential);
  };

  const loginHandler = async (event) => {
    event.preventDefault();

    if (user.email !== "" && user.password !== "") {
      try {
        const response = await loginService(user);

        if (response.status === 200) {
          localStorage.setItem("token", response.data.encodedToken);
          localStorage.setItem("user", JSON.stringify(response.data.foundUser));

          authDispatch({
            type: "LOGIN",
            payload: {
              user: response.data.foundUser,
              token: response.data.encodedToken,
            },
          });

          navigate("/");
        } else if (response.status === 401) {
          throw new Error("Enter correct password");
        } else if (response.status === 404) {
          throw new Error("Email not found");
        } else if (response.status === 500) {
          throw new Error("Server error");
        }
      } catch (error) {
        console.log(response);
      }
    } else {
      alert("enter both field");
    }
  };

  return (
    <div className="container">
      <div className="box">
        <form className="login-container" method="post">
          <h1>Login</h1>
          <div className="login-credential">
            <div className="login-email">
              <label htmlFor="email">Email address *</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="adarshbalika@gmail.com"
                required
                value={user.email}
                onChange={changeHandler}
              />
            </div>

            <div className="login-password">
              <label htmlFor="password">Password *</label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="**********"
                required
                value={user.password}
                onChange={changeHandler}
              />
            </div>
          </div>

          <div className="con">
            <div className="remember-me">
              <input type="checkbox" id="remember-box" required />
              <label htmlFor="remember-box">Remember me</label>
            </div>
          </div>

          <div className="login-btns">
            <button className="new-account" onClick={guestUserHandler}>
              Add Guest Credential
            </button>
            <button className="login" type="submit" onClick={loginHandler}>
              Login
            </button>
          </div>

          <Link to="/signup" className="new-account">
            Create New Account <strong>&#62;</strong>
          </Link>
        </form>
      </div>
    </div>
  );
};

export { Login };
