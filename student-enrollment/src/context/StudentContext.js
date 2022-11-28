import { createContext } from "react";


const StudentsContext = createContext({
    enrolled: [],
    enrollStudent: () => {},
    resetEnrollment: () => {}
})

export default StudentsContext;