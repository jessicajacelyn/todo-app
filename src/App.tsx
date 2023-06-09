import React from 'react';
import logo from './logo.svg';
import Buttons from './component/Buttons';
import Counter from './features/counter/Counter';
import Header from './component/Header';
import Todos from './component/Todos';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />

      <header className="App-header">

        {/* <h1 style={{ textAlign: 'left' }}>ToDo !!</h1> */}

        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <Counter /> */}
        {/* <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <span>
          <span>Learn </span>
          <a
            className="App-link"
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux-toolkit.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux Toolkit
          </a>
          ,<span> and </span>
          <a
            className="App-link"
            href="https://react-redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Redux
          </a>
        </span> */}
        {/* <Buttons /> */}
        <Todos />

      </header>

    </div>
  );
}

export default App;
