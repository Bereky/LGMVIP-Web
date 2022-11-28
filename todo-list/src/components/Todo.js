import { useContext, useState } from "react"

import DeleteIcon from '@mui/icons-material/Delete';
import TodoContext from "../context/TodoContext";

const Todo = (props) => {

    const [ checked, setChecked ] = useState()
    const todoContext = useContext(TodoContext)

    const handleChange = (e) => {
        setChecked(e.target.checked)
    }

    const removeHandler = () => {
        todoContext.removeTodo(props.data)
    }

    return ( 
        <div className="flex h-20 w-full bg-slate-100 flex-row px-3 rounded-lg">
            <div className="w-8 flex items-center justify-center">
                <input type="checkbox" name="complete"  onChange={handleChange} className="w-full h-6"/>
            </div>
            <div className="w-11/12 flex flex-col justify-center ml-4">
                <div className="">
                    <h2 className={`text-xl font-bold ${checked && `line-through`}`}>{props.data.todoName}</h2>
                </div>
                <div className="">
                    <h2 className="text-sm">{props.data.date}</h2>
                </div>
            </div>
            <div className="w-1/12 flex justify-center items-center">
                <DeleteIcon className="w-auto hover:bg-slate-200 cursor-pointer hover:text-pink-900 duration-700" onClick={removeHandler}/>
            </div>
        </div>
     );
}
 
export default Todo;