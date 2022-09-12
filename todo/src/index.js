import React from 'react';
import ReactDOM from 'react-dom';

import Title from './components/title/component';
import Search from './components/seatch/component'
import TodoList from './components/todo-list/components';


const App=(
  <div>
    <Title />
    <Search />
    <TodoList />
  </div>
)

ReactDOM.render(<App />, document.getElementById('root'))