import TodoProvider from "../context/TodoProvider";
import TodoList from "./TodoList";

function App() {
  return (
    <div className="min-h-screen bg-slate-100">
        <TodoProvider>
          <TodoList />
        </TodoProvider>
    </div>
  );
}

export default App;
