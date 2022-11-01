import { Button } from "react-bootstrap"
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from '../../App';
import { IAppContext } from "../helps/interfaces";

interface INavPanel {
  counter: number;
}

export default function NavPanel({counter}: INavPanel){
  const {clearComplitedTask}: IAppContext = useContext(AppContext)
  const clearTaskHendler = () => {
    clearComplitedTask();
  } 
  return (
      <div className="nav-panel">
        <p> {counter} items left</p>
        <div className="link-panel">
          <NavLink to="/all">All</NavLink>
          <NavLink to="/active">Active</NavLink>
          <NavLink to="/complite">Complite</NavLink>
        </div>
            <Button variant="link" onClick={clearTaskHendler}>Clear complited</Button>
      </div>

  )
}