import Header from "./Header";
import Form from './form/index'
import Display from "./display";
import StudentsProvider from "../context/StudentProvider";

function App() {
  return (
    <StudentsProvider>
      <div className="h-screen">
          <Header />
          <div className="w-full flex flex-col flex-wrap justify-center items-center h-full lg:flex-row">
            <Form />
            <Display />
          </div>
      </div>
    </StudentsProvider>
  );
}

export default App;
