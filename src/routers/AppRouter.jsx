import React, { useEffect, useState } from "react";
import { BrowserRouter, Redirect, Switch } from "react-router-dom";
import JournalScreen from "../components/journal/JournalScreen";
import AuthRouter from "./AuthRouter";
import { firebase } from "../firebase/firebaseConfig";
import { useDispatch } from "react-redux";
import { login } from "../actions/authActions";
import PrivateRoutes from "../hoc/PrivateRoutes";
import PublicRoutes from "../hoc/PublicRoutes";
import { startLoadingNotes } from "../actions/notesActions";

const AppRouter = () => {
  const dispatch = useDispatch();
  const [checking, setChecking] = useState(true);
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(async (user) => {
      if (user?.uid) {
        dispatch(login(user.uid, user.displayName));
        setIsLogged(true);

        dispatch(startLoadingNotes(user.uid));
      } else {
        setIsLogged(false);
      }
      setChecking(false);
    });
  }, [dispatch, setChecking]);

  if (checking) return <h1>Loading...</h1>;

  return (
    <BrowserRouter>
      <div>
        <Switch>
          <PublicRoutes isAuth={isLogged} path="/auth" component={AuthRouter} />
          <PrivateRoutes
            isAuth={isLogged}
            exact
            path="/"
            component={JournalScreen}
          />
          <Redirect to="/auth/login" />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;
