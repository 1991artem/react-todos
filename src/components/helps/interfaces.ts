export interface ITodos{
  userId?: number,
  id: number;
  title: string;
  completed: boolean;
}

export interface IAppContext {
  todos: ITodos[];
  onToggle: (id: number)=>void;
  onRemove: (id: number)=>void;
  onAdd: (title: string)=>void;
  clearComplitedTask: ()=>void;
}