import React from 'react';
import Contacts from './components/Contacts';
import './App.css';

function App() {
  return (
    <div className="row">
      <div className="col-md-8 offset-md-2">
      <Contacts />
      </div>
    </div>
  );
}

export default App;
