import TodoAdd from "./TodoAdd";
import Todos from "./Todos";

const TodoList = () => {
    return ( 
        <div className="flex justify-center w-full items-center flex-col pb-4">
            <TodoAdd />
            <Todos />
        </div>
     );
}
 
export default TodoList;