import React from 'react';
import { createRoot } from 'react-dom/client';
import axios from 'axios'



const App = () =>{
  const luka = axios.get('https://swapi.dev/api/people/1');
  luka.then(console.log)
  return (
    <div>
      hi
    </div>
  );
}
const root = createRoot(document.getElementById('root')); // createRoot(container!) if you use TypeScript
root.render(<App tab="home" />);