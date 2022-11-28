import { useContext } from "react";
import StudentsContext from "../../context/StudentContext";
import Card from "./Card";

const Display = () => {
    
    const studentsContext = useContext(StudentsContext);

    return ( 
        <div className="w-1/2 h-full flex flex-col my-4">
            <div className="w-full flex items-center justify-center h-16 mb-4">
                <h1 className="text-2xl font-bold"> Enrolled Students</h1>
            </div>
            <div className="w-full h-full flex items-center flex-col space-y-3">
                {studentsContext.enrolled.length > 0 &&
                    studentsContext.enrolled.map((studentData) => <Card data={studentData}/>)
                }
            </div>
        </div>
     );
}
 
export default Display;