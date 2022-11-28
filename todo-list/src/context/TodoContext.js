import { createContext } from 'react'

const TodoContext = createContext({
    todos: [],
    addTodo: () => {},
    removeTodo: () => {}
});

export default TodoContext;

