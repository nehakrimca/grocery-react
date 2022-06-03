import React, { useState } from 'react';
import './App.css';
import Item from './components/item';

const initList = [
  { name: 'tomato', calorie: 20 },
  { name: 'rice', calorie: 30 },
  { name: 'candy', calorie: 100 },
];

function App() {
  const [list, setList] = useState(initList);

  const removeItemHandle = (e) => {
    console.dir(e.traget.name);
    const filteredList = list.filter((v) => v.name !== e.traget.name);
    setList(filteredList);
  };

  return (
    <div className='App'>
      <header className='App-header'>
        <h2>Grocery List</h2>

        {list.map((v, k) => {
          return (
            <Item
              key={`${k}${v.name}${v.calorie}`}
              item={v}
              onClick={removeItemHandle}
            />
          );
        })}

        {/* <button onClick={removeunHealthyHandle} className='remove-button'>
          Remove Unhealthy
        </button> */}
      </header>
    </div>
  );
}

export default App;
