import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import TodoScreen from '../components/todo/TodoScreen'
import AuthRouter from './AuthRouter'

const AppRouter = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route 
            path="/auth" 
            component={AuthRouter} 
          />

          <Route 
            exact
            path="/" 
            component={TodoScreen} 
          />

          <Redirect to="/" />

        </Switch>
      </div>
    </Router>
  )
}

export default AppRouter
