import { ITodoInput } from "./Interfaces";
const TodoInput = ({setTodo, addTodo, todo}: ITodoInput) => {

    return (
     <div>
         <input id="todo" type="text" value={todo} onChange={(event) => setTodo(event.target.value)}/>
         <button onClick={() => addTodo(todo)}>Add</button>
     </div>
    ) 
 }

export default TodoInput;