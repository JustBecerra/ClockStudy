import React from 'react';
import Clock from '../src/Clock/Clock';
import './App.css'
import none from './BGgifs/none.gif'

function App() {
  let [background,setBackground] = React.useState('')
  const changeBG = (e:React.ChangeEvent<HTMLSelectElement>) => {
    setBackground(e.target.value)
  }

  return (
    <div style={{ backgroundImage:`url(${none})` }}>
      <header className='headerST'>
        Happy Studying!
      </header>
      <select onChange={e => changeBG(e)}>
        <option value='black'>None</option>
        <option></option>
        <option></option>
        <option></option>
        <option></option>
      </select>
      {/* {time} */}
      <Clock/>
    </div>
  );
}

export default App;
