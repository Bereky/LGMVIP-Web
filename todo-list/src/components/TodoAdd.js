import { useContext, useState } from "react";
import TodoContext from "../context/TodoContext";


const TodoAdd = () => {

    const todoContext = useContext(TodoContext)
    
    const [ todo, setTodo] = useState({
        id: '',
        todoName: '',
        completed: '',
        date: ''
    })

    const handleAdd = (e) => {
        e.preventDefault();
        
        if(todo.todoName){
            todoContext.addTodo(todo)
            setTodo({...todo,
                todoName: ''
            })
        }
    }

    const handelChange = (e) => {
        setTodo({...todo,
            todoName: e.target.value,
        })
    }

    return ( 
        <div className="w-3/4 min-w-24  mt-8 flex flex-col">
            <div className="flex items-center justify-center py-4">
                <h1 className="font-bold text-5xl ">TODO LIST</h1>
            </div>

            <form onSubmit={handleAdd}>
                <div className="flex flex-row w-full space-x-4 bg-slate-300 p-6 rounded-t-lg items-center justify-center">
                    <div className="w-3/4 ">
                        <input type="text" placeholder="Enter task" className="w-full h-12 rounded-lg text-xl px-2" value={todo.todoName} onChange={handelChange}/>
                    </div>
                    <div className="w-1/4">
                        <button type="submit" className="w-full h-12 rounded-lg text-lg bg-indigo-700 text-white hover:text-indigo-700 hover:bg-white duration-200 font-bold" >Add Task</button>
                    </div>
                </div>
            </form>
        </div>
     );
}
 
export default TodoAdd;