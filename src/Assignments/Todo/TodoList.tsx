import { ITodoList } from "./Interfaces";
import TodoItem from "./TodoItem";

const TodoList = ({setTodos, markCompleted, todos}:ITodoList) => {

    return (
        <div>
            {todos.map((todo, index) => <TodoItem setTodos={setTodos} markCompleted={markCompleted} todos={todos} todo={todo} index={index} />)}           
        </div>
    )
}

export default TodoList;