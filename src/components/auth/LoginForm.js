import React, { useState, useContext, useCallback, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import Styles from "./login.module.css";
import { Button } from "@material-ui/core";
import LockIcon from "@material-ui/icons/Lock";
import { AuthContext } from "app/App";
import {usePost} from 'utils/hooks/usePost'

function LoginForm() {
  //style for invalid username and password
  const invalid = {
    border: "1px solid red",
  };

  const history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isWrongPassword, setIsWrongPassword] = useState();
  const { dispatch } = useContext(AuthContext);

  const {state,upload} = usePost("http://www.mitihai.org/auth/login/");

  const validatePassword = useCallback(() => {
    // if (username === "user" && password === "user") {
    //   setIsWrongPassword(false);
    //   dispatch({ details: "LOG_IN", payload: { username: "User" } });
    //   history.push("/dashboard");
    // }
    // return setIsWrongPassword(true);
    upload({email:username, password:password})
    console.log(state)
  }, [username, password, dispatch, history]);

  useEffect(() => {
    history.push("/");
  }, [history]);
  
  return (
    <div className={Styles.loginContainer}>
      <div className={Styles.loginForm}>
        <h3 className="centreTitle">Login</h3>
        <h3 className="center with-top-margin">
          <LockIcon fontSize="large" />
        </h3>
        <label htmlFor="Vendor Id">Username</label>
        <input
          style={isWrongPassword ? invalid : {}}
          type="text"
          placeholder="username"
          name="username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="Password">Password</label>
        <input
          style={isWrongPassword ? invalid : {}}
          type="password"
          name="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className={Styles.loginActions}>
          {isWrongPassword && (
            <p className="fieldError wrong-password">
              Invalid username or password
            </p>
          )}
          <Button
            variant="outlined"
            size="small"
            color="primary"
            onClick={validatePassword}>
            Log In
          </Button>
          <p className="center">
            <Link>Forgot password ?</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
export default LoginForm;
