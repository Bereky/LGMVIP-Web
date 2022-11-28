import { useState } from "react";
import TodoContext from "./TodoContext";

import { v4 as uuidv4 } from 'uuid';

const TodoProvider = (props) => {

    const [ todos, setTodos ] = useState([]);

    // adding todos
    const addTodoHandler = (todo) => {
        let { todoName, completed } = todo;

        const fullTime = new Date()
        const time = fullTime.getHours() + ':' + fullTime.getMinutes() + ', ' + fullTime.getDate() + '/' + fullTime.getMonth() +  '/' + fullTime.getFullYear()


        setTodos((prevTodos) => [ {id: uuidv4(), todoName, completed, date: time}, ...prevTodos])
    }

    const removeTodoHandler = (todo) => {
        setTodos(todos.filter((prevTodos) => prevTodos.id !== todo.id))
    }

    const todoCtx = {
        todos: todos,
        addTodo: addTodoHandler,
        removeTodo: removeTodoHandler
    }

    return ( 
        <TodoContext.Provider value={todoCtx}>
            {props.children}
        </TodoContext.Provider>
     );
}
 
export default TodoProvider;