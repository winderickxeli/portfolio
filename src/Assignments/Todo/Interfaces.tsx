export interface TodoItem { 
    name: string;
    completed: boolean;
}

export interface ITodoInput {
    addTodo: (todo: string) => void,
    setTodo: (todo: string) => void,
    todo:string
}

export interface ITodoList {
    setTodos: (todos:TodoItem[]) => void,
    markCompleted: (index: number, completed: boolean) => void,
    todos: TodoItem[]
}

export interface ITodoItem{
    setTodos: (todos:TodoItem[]) => void,
    markCompleted: (index: number, completed: boolean) => void,
    todos: TodoItem[],
    todo: TodoItem,
    index: number
}

