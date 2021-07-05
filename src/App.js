import React from 'react';
import SignIn from './components/SignIn';
import Register from './components/Register'
import Checkout from './components/Checkout';
import Dashboard from './components/Dashboard';


const App = () => {
  return (
    <>
      <SignIn />
      <Register />
      <Checkout />
      <Dashboard />
    </>

  );
}

export default App;
