import { useContext, useRef } from "react"
import { AppContext } from "../../App";

export default function TaskInput(){
  const {onAdd} = useContext(AppContext);
  const ref = useRef<HTMLInputElement>(null)

  const keyPressHandler = (event: React.KeyboardEvent) => {
    if(ref.current){
      if (event.key === 'Enter') {
        if(ref.current.value){
          onAdd(ref.current.value)
          ref.current!.value = ''
        }
      }
    }
  }
  return(
    <input 
    className="input" 
    type="text" 
    placeholder="What needs to be done?"
    onKeyPress={keyPressHandler}
    ref={ref}
    id="title"
    />
  )
}