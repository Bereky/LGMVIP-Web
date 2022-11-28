import { useContext, useState } from "react";
import StudentsContext from "./StudentContext";

const StudentsProvider = (props) => {
    useContext(StudentsContext)

    const [ enrolledStudents, setEnrolledStudents ] = useState([]);


    const addStudent = (data) => {
        const { name, email, website, imageLink, gender, skills } = data;
        setEnrolledStudents((prevStuds) => [{name, email, website, imageLink, gender, skills}, ...prevStuds]);
    }

    const resetEnrolled = () => {
        setEnrolledStudents([])
    }

    const stdContext = {
        enrolled: enrolledStudents,
        enrollStudent: addStudent,
        resetEnrollment: resetEnrolled
    }

    return ( 
       <StudentsContext.Provider value={stdContext}>
            {props.children}
       </StudentsContext.Provider>
     );
}
 
export default StudentsProvider;