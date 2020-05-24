import React from 'react';
import './App.css';

function App() {
  const message = "This is my first variable rendered in JSX!";

  const handleClick = () => {
    alert("you clicked the message!");
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello kings</h1>
        <h2 onClick={handleClick}>{message}</h2>

      </header>
    </div>
  );
}

export default App;

