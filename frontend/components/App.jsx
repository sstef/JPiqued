import React from 'react';
import {Provider} from 'react-redux';
import GreetingContainer from './greeting_container';
import SessionFormContainer from './session/session_form_container';
import { HashRouter, Route, Link } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';

const App = () => {
  return(
    <div>
      <header>

      </header>

      <AuthRoute path="/login" component={SessionFormContainer} />
      <AuthRoute path="/signup" component={SessionFormContainer} />

   </div>
 );
};

export default App;
