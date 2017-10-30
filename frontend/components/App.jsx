import React from 'react';
import {Provider} from 'react-redux';
import PinIndexContainer from './pin/pin_index_container';
import PinShowContainer from './pin/pin_show_container';
import UserShowContainer from './user/user_show_container';
import SessionFormContainer from './session/session_form_container';
import { Switch, Route, Link } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => {
  return(
    <div>
      <Switch>
        <Route path="/pins/:pinId" component={PinShowContainer} />
        <Route path="/users/:userId" component={UserShowContainer} />
        <AuthRoute path="/login" component={SessionFormContainer} />
        <AuthRoute path="/signup" component={SessionFormContainer} />
        <ProtectedRoute path="/" component={PinIndexContainer} />
      </Switch>
   </div>
 );
};

export default App;
