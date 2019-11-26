import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import CreateProject from './components/projects/CreateProject';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/create" component={CreateProject} />
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
