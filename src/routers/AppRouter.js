import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';

import TodoScreen from '../components/todo/TodoScreen';
import AuthRouter from './AuthRouter';
import { auth } from '../firebase/config';
import { useDispatch } from 'react-redux';
import { authLogin } from '../actions/authActions';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import Loading from '../components/loading/Loading';

const AppRouter = () => {
  //hooks
  const [isUserAuth, setIsUserAuth] = useState(false);
  const [cheking, setCheking] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged( user => {
      if( user?.uid){
        dispatch(authLogin(user.uid, user.displayName));
        setIsUserAuth( true );
      } else {
        setIsUserAuth( false );
      }
      setCheking(false);
    })
  }, [dispatch]);

  if(cheking){
    return (
      <Loading />
    )
  }

  return (
    <Router>
      <div>
        <Switch>
          <PublicRoute 
            path="/auth" 
            component={AuthRouter} 
            isAuth={isUserAuth}
          />

          <PrivateRoute 
            exact
            path="/" 
            component={TodoScreen} 
            isAuth={isUserAuth}
          />

          <Redirect to="/" />

        </Switch>
      </div>
    </Router>
  )
}

export default AppRouter
