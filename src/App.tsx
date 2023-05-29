import React from 'react';
import Nav from './components/Nav';
import { Outlet } from 'react-router';

function App() {
  return (
    <div>
      <Nav />
      <Outlet />
    </div>
  );
}

export default App;
