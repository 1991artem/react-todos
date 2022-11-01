import { useContext } from "react";
import { AppContext } from '../../App';
import { IAppContext, ITodos } from "../helps/interfaces"
import NavPanel from "./NavPanel";
import Task from "./Task"

interface ITaskPlace {
  params: string;
}

export default function TaskPlace({ params }: ITaskPlace) {
  const {todos}: IAppContext = useContext(AppContext)
  const uncomplitedTaskArray = todos.filter((task: ITodos)=> !task.completed);
  let filterArray = todos;
  switch(params){
    case 'active': filterArray = uncomplitedTaskArray; 
    break;
    case 'complite': filterArray = todos.filter((task: ITodos)=> task.completed)
    break;
  }
  return (
      <div className="task-place">
        { !filterArray.length ?
        <h1>You have no tasks in this section</h1>
        :
          filterArray.map((task: ITodos, index: number) => {
                return (
                  <Task task={task} key={index}/>
                )
          })}
        <NavPanel counter={uncomplitedTaskArray.length}/>
      </div>
  )
}