const Card = ({data}) => {
    return ( 
        <div className="flex h-40 w-5/6 bg-bSuperLight flex-row px-3 rounded-lg">
            <div className="w-4/6 flex items-start justify-center flex-col text-bgLight">
                <h2 className="text-xl font-bold">{data.name}</h2>
                <h2 className="text-md ">{data.gender}</h2>
                <h2 className="text-md ">{data.email}</h2>
                <h2 className="text-md text-blue-300 hover:underline"><a href={data.website}>{data.website}</a></h2>
                <div className="flex flex-row">
                    {data.skills.map((skill) => skill.checked && <h2 className="text-md mr-1" key={skill.name}>{skill.name}</h2>)}
                </div>
            </div>

            <div className="w-2/6 flex flex-col justify-center ml-4 h-full p-3">
                <img src={data.imageLink} alt="student_image" className=" h-fit rounded-full" />
            </div>
        </div>
     );
}
 
export default Card;
