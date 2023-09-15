/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { FaBookOpen } from "react-icons/fa6";


const Course = ({course, handleSelectedCourse}) => {
    const {image, title, description, price, credit_hours} =course;
    return (
        <div className="bg-white rounded-md p-4 mx-3">
            <div className="flex justify-center">
                <img src={image} alt="" />
                </div>
            <h2 className="font-semibold text py-4">{title}</h2>
            <p className="font-normal text-sm">{description}</p>
            <div className="flex justify-around py-3">
                <p>$ Price: {price}</p>
                <p className="flex justify-between gap-2 items-center"><FaBookOpen></FaBookOpen>Credit: {credit_hours} hr</p>
            </div>
            <button onClick={()=> handleSelectedCourse(course)} className="w-full bg-blue-500 text-white rounded">Select</button>
        </div>
    );
};

export default Course;