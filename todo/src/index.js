import React from 'react';
import { createRoot } from 'react-dom/client';

import Title from './components/title/component';
import Search from './components/seatch/component'
import TodoList from './components/todo-list/components';


const App = () =>{
  const items =[
    { id: 1, label: 'item 1', },
    { id: 2, label: 'item 2', important: true },
  ];
  return (
    <div>
      <Title />
      <Search />
      <TodoList items={items} />
    </div>
  );
}
const root = createRoot(document.getElementById('root')); // createRoot(container!) if you use TypeScript
root.render(<App tab="home" />);