import React from 'react';
import Router from './Component/Config/AppRouter';
import Context from './Component/Context';
import './App.css';
function App() {
  return (
    <div className="App">
      <Context>
        <Router />
      </Context>
    </div>
  );
}

export default App;
