import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import LoginForm from "components/auth/LoginForm";
import { useAuth } from "utils/hooks/useAuth";
import AppContent from "./AppContent";

export const AuthContext = React.createContext(null);

function App() {
  const { dispatch, userState } = useAuth();
  return (
    <AuthContext.Provider value={{ dispatch, userState }}>
      <Router>
        <Switch>
          {userState.isLoggedIn ? <AppContent /> : <LoginForm />}
          <Route exact path="/">
            {userState.isLoggedIn ? (
              <Redirect to="/dashboard" />
            ) : (
              <LoginForm />
            )}
          </Route>
        </Switch>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
