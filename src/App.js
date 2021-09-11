import logo from './logo.svg';
import './App.css';

// Hooks
// Arrays and objects, looping
import {useState, useEffect} from 'react'
// Single react component internals

function App() {

  // think about problems in terms of side effects
  const [clickCounter, setClickCounter] = useState(0);
  const [theInputTextValue, setTheInputTextValue] = useState('');
  const [items, setItems] = useState(['a', 'b', 'c']);

  // useEffect(() => {
  //     if(clickCounter == 10){
  //         console.log('the use effect function just ran!')
  //         console.log('Run this code whenever the click counter changes')
  //         alert('Yay you are the count 10')
  //     }
  // }, [clickCounter])

    useEffect(() => {
        console.log('this code only runs when the page loads the first time')
    }, [])

  const updateCounter = async () => {
    console.log('the button was clicked!')
    // clickCounter = clickCounter + 1
    let copyOfTheCounter = clickCounter
    copyOfTheCounter = copyOfTheCounter + 1
    setClickCounter(copyOfTheCounter)
    /*if(copyOfTheCounter == 10) {
        alert('Yay you are the count 10')
    }  */
  };

  const onInputChange = async (event) => {
      setTheInputTextValue(event.currentTarget.value)
  };

  const addItem = async () => {
      // items
      // let copyOfTheItemsArray = items
      // copyOfTheItemsArray.push(theInputTextValue)
      // setItems(copyOfTheItemsArray)
      setItems([...items, theInputTextValue])
  };

  return (
      <div>
        <button onClick={updateCounter}>Click me</button>
        {/*JSX*/}

          <input onChange={onInputChange} type="text" value={theInputTextValue} />
          <button onClick={addItem}>Add to items</button>

          <p>{theInputTextValue}</p>

          <ul>
              {items.map((item) => {
                  return <li key={item}>{item}</li>
              })}
          </ul>

        <h1 style={{color: (clickCounter == 5 ? 'green' : 'red')}}>THE Counter: {clickCounter}</h1>

          {/*logical operators */}
          {/*ternary operators*/}

          {/*OR logical operator*/}

          {(clickCounter == 10 || clickCounter == 7) ?
              <h1 style={{color: 'green'}}>The counter is now at {clickCounter}!</h1> :
              <h1 style={{color: 'red'}}>The counter is not at {clickCounter}!</h1>}


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
