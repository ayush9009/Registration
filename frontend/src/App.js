import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import RegisterForm from './components/RegisterForm';
import LoginForm from './components/LoginForm';
import Dashboard from './components/Dashboard';
import Home from './components/Home'

const App = () => {
  return (
    <Router>
      <Switch>

        <Route path="/register" component={RegisterForm} />
        <Route path="/login" component={LoginForm} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
};

export default App;
