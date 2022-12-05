import { ITodoItem } from "./Interfaces";

const TodoItem = ({setTodos, markCompleted, todos, todo, index}: ITodoItem) => {

    return (
        <div key={index}>
        <input type="checkbox" checked={todo.completed} onChange={(event) => markCompleted(index, event.target.checked)}/>
        <span style={{textDecoration: todo.completed ? "line-through" : "none"}}>{todo.name}</span>
    </div>
    )
}

export default TodoItem;