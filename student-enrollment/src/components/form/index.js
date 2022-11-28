import { useContext, useState } from 'react';
import StudentsContext from '../../context/StudentContext';

const Form = () => {
    
    const [ name, setName ] = useState()
    const [ email, setEmail ] = useState()
    const [ website, setWebsite ] = useState()
    const [ imageLink, setImageLink ] = useState()
    const [ gender, setGender ] = useState()
    const [ skills, setSkills ] = useState([
        {name: 'JAVA', checked: false}, 
        {name: 'HTML', checked: false},
        {name: 'CSS', checked: false}
    ])

    const studentsContext = useContext(StudentsContext);

    const clearForm = () => {
        setName('');
        setEmail('');
        setWebsite('');
        setImageLink('');
    }

    const handleName = (e) => {
        setName(e.target.value)
    }

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const handleGender = (e) => {
        setGender(e.target.value)
    }

    const handleWebsite = (e) => {
        setWebsite(e.target.value)
    }

    const handleImageLink = (e) => {
        setImageLink(e.target.value)
    }

    const handleSkills = (skillIndex) => {

        const updateStudSkills = skills.map((skill, index) => 
            index === skillIndex ? {name: skill.name, checked: !skill.checked} : skill
            
        ) 

        setSkills(updateStudSkills)
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        studentsContext.enrollStudent({
            name, email, website, imageLink, gender, skills
        })

        clearForm()
    }

    const clearEnrolled = () => {
        studentsContext.resetEnrollment()
    }

    return ( 
        <div className="w-1/2 h-full">
            <form onSubmit={handleSubmit}>
                <div className="flex justify-center items-center flex-col w-100 my-10 space-y-4 h-100">
                    <div className=" w-11/12 space-x-5 flex flex-row">
                        <div className="flex items-center justify-start w-4/12">
                            <label for="name" className="text-xl ">Name: </label>
                        </div>
                        <input type="text" name="name" value={name} onChange={handleName} required className="w-10/12 py-2 px-2 text-lg border-2 rounded-md border-b-gray-200 border-solid focus:outline-bLightDark"/>
                    </div>

                    <div className=" w-11/12 space-x-5 flex flex-row">
                        <div className="flex items-center justify-start w-4/12">
                            <label for="email" className="text-xl ">Email: </label>
                        </div>
                        <input type="email" name="email" value={email} onChange={handleEmail} required className="w-10/12 py-2 px-2 text-lg border-2 rounded-md border-b-gray-200 border-solid focus:outline-bLightDark"/>
                    </div>

                    <div className=" w-11/12 space-x-5 flex flex-row">
                        <div className="flex items-center justify-start w-4/12">
                            <label for="website" className="text-xl ">Website: </label>
                        </div>
                        <input type="text" name="website" value={website} onChange={handleWebsite} required className="w-10/12 py-2 px-2 text-lg border-2 rounded-md border-b-gray-200 border-solid focus:outline-bLightDark"/>
                    </div>

                    <div className=" w-11/12 space-x-5 flex flex-row">
                        <div className="flex items-center justify-start w-4/12">
                            <label for="image-link" className="text-xl ">Image Link: </label>
                        </div>
                        <input type="text" name="image-link" value={imageLink} onChange={handleImageLink} required className="w-10/12 py-2 px-2 text-lg border-2 rounded-md border-b-gray-200 border-solid focus:outline-bLightDark"/>
                    </div>

                    <div className=" w-11/12 space-x-5 flex flex-row">
                        <div className="flex items-center justify-start w-4/12">
                            <label for="gender" className="text-xl ">Gender:</label>
                        </div>
                        <div className="flex flex-col w-10/12 items-start" onChange={handleGender} required>
                            <div className="flex space-x-2">
                                <input type="radio" name="gender" value="Male" className=""/>
                                <label for="gender" className="text-lg "> Male</label>
                            </div>
                            <div className="flex space-x-2">
                                <input type="radio" name="gender" value="Female" className=""/>
                                <label for="gender" className="text-lg"> Female</label>
                            </div>
                        </div>
                    </div>

                    <div className=" w-11/12 space-x-5 flex flex-row mb-4">
                        <div className="flex items-center justify-start w-4/12">
                            <label for="gender" className="text-xl ">Skills:</label>
                        </div>
                        <div className="flex flex-row w-10/12 items-start space-x-4" required>

                            { skills &&
                                skills.map((skillObj, index) => {
                                    return(
                                        <div className="flex space-x-2" key={index}>
                                            <input type="checkbox" name={skillObj.name} value={skillObj.name} checked={skillObj.checked} onChange={() => handleSkills(index)} className=""/>
                                            <label for="skills" className="text-lg "> {skillObj.name}</label>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>

                    <div className=" w-11/12 space-x-5 flex flex-row mt-10 h-18">
                        <button className="w-2/4 py-3 text-textLight hover:text-bLightDark border-2 rounded-md bg-bDark hover:bg-bgLight" type="submit">Enroll Student</button>
                        <button className="w-2/4 py-3 text-textLight hover:text-bLightDark border-2 rounded-md bg-bDark hover:bg-bgLight" type="button" onClick={clearEnrolled}>Clear</button>
                    </div>

                </div>
            </form>
        </div>
     );
}
 
export default Form;