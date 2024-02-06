import { useState } from 'react'

import './App.css'

function Counter() {
  const [count, setCount] = useState(10)

  function addone() {
    setCount(count + 1);
  }

  return (
    <div className='App'>
      <button onClick={addone}>count = {count}</button>
    </div>
  )
}

function NameList() {
  const [list, setList] = useState(["Thanu", "Thenu", "Sentha", "Vinu"]);
  const [name, setName] = useState("");

  const onAdd = () => {
      list.push(name);
      setList([...list, name]);
    };
  
  
  return (
    <div>
      <ul>
        {list.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
      <input
        type='text'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={onAdd}>Add Name</button>
    </div>
  );
}

function App() {
  return (
    <div>
      <Counter />
      <NameList />
    </div>
  )
}

export default App;
