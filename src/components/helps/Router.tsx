import {
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import TaskPlace from "../task/TaskPlace";


export default function Router(){
  return (
    <Routes>
      <Route path="/" element={<Navigate to='/all' />}/>
      <Route path="/all" element={<TaskPlace params={'all'} />}/>
      <Route path="/complite" element={<TaskPlace params={'complite'} />}/>
      <Route path="/active" element={<TaskPlace params={'active'} />}/>
      <Route path="*" element={<Navigate to='/all' />}/>
    </Routes>
  )
}