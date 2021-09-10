import logo from './logo.svg';
import './App.css';

// Hooks
// Arrays and objects, looping
import {useState, useEffect} from 'react'
// Single react component internals

function App() {

  const [clickCounter, setClickCounter] = useState(0);

  const updateCounter = async () => {
    console.log('the button was clicked!')
    // clickCounter = clickCounter + 1
    let copyOfTheCounter = clickCounter
    copyOfTheCounter = copyOfTheCounter + 1
    setClickCounter(copyOfTheCounter)
  };

  return (
      <div>
        <button onClick={updateCounter}>Click me</button>
        {/*JSX*/}

        <h1 style={{color: 'green'}}>Counter: {clickCounter}</h1>

      </div>
  );
}

export default App;



// <div className="App">
//   {/*JSX*/}
//   <header className="App-header">
//     <img src={logo} className="App-logo" alt="logo" />
//     <p>
//       Edit <code>src/App.js</code> and save to reload.
//     </p>
//     <a
//         className="App-link"
//         href="https://reactjs.org"
//         target="_blank"
//         rel="noopener noreferrer"
//     >
//       Learn React
//     </a>
//   </header>
// </div>
