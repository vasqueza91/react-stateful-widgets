import React from 'react';
import { render } from 'react-dom';

import Counter from './components/Counter';
import Input from './components/Input';
import Moods from './components/Moods';
import Spinner from './components/Spinner';
import Squares from './components/Squares';
import Programmers from './components/Programmers';
import Todo from './components/Todos';

render(
  <>
    <Counter />
    <Moods />
    <Spinner />
    <Input />
    <Squares />
    <Programmers />
    <Todo 
      task1 = "Walk the dog"
      task2 = "Wash the dishes"
      task3 = "Clean the yard"
      task4 = "Study React"
      />
  </>
  ,
  document.querySelector('#root')
);
