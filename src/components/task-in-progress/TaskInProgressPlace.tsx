import { ITask } from "../helps/interfaces"

interface ITaskInProgressPlace {
  task: ITask[]
}

export default function TaskInProgressPlace({task}: ITaskInProgressPlace){
  return (
    <>
      <h1>Task in progress</h1>
      <div className="task-place"></div>
    </>
  )
}