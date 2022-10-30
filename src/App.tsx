import React from 'react';
import TaskInProgressPlace from './components/task-in-progress/TaskInProgressPlace';
import TaskInput from './components/task-input/TaskInput';
import TaskDonePlace from './components/task-done/TaskDonePlace';
import { ITask } from './components/helps/interfaces';

const task: ITask[] = [
  {
    id: +Date.now(),
    name: 'Made task #1',
    done: false,
  },
  {
    id: +Date.now(),
    name: 'Made task #2',
    done: false,
  },
  {
    id: +Date.now(),
    name: 'Made task #3',
    done: false,
  },
  {
    id: +Date.now(),
    name: 'Made task #4',
    done: false,
  }
]


function App() {
  return (
    <div className='container'>
      <h1>todos</h1>
      <TaskInput/>
      <TaskInProgressPlace task={task}/>
      <TaskDonePlace />
    </div>
  );
}

export default App;
