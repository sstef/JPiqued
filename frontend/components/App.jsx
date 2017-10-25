import React from 'react';
import {Provider} from 'react-redux';
import GreetingContainer from './greeting_container';
import SessionFormContainer from './session/session_form_container';
import { Switch, Route, Link } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => {
  return(
    <div>
      <Switch>
        <AuthRoute path="/login" component={SessionFormContainer} />
        <AuthRoute path="/signup" component={SessionFormContainer} />
        <ProtectedRoute path="/" component={GreetingContainer} />
      </Switch>
   </div>
 );
};

export default App;
