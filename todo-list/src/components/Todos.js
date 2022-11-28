import { useContext } from "react";
import TodoContext from "../context/TodoContext";
import Todo from "./Todo";

const Todos = () => {
    const todoContenxt = useContext(TodoContext)

    return ( 
        <div className="flex space-y-4 bg-slate-200 p-6 h-auto rounded-b-lg items-center justify-center flex-col w-3/4">
            {/* Render todos here */}
            {todoContenxt && todoContenxt.todos.map((todo) => <Todo data={todo} key={todo.id}/>)}

            {todoContenxt.todos.length === 0  && 
                <div className="flex h-20 w-full bg-slate-300 items-center justify-center rounded-lg"> 
                    <div className="w-36 bg-slate-100 p-2 text-center font-bold">
                        NO TODOS
                    </div>
                </div>
            }
        </div>
     );
}
 
export default Todos;