/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react";
import Course from "../Course/Course";

const Courses = () => {
    const [courses, setCourses] = useState([]);
    
    useEffect(() => {
        fetch('courses.json')
        .then(res=>res.json())
        .then(data=> setCourses(data))
    },[])
    return (
        <div className="md:w-3/4 grid grid-cols-1 md:grid-cols-3 gap-4">
            {
                courses.map(course => <Course course= {course} ></Course>)
            }
        </div>
    );
};

export default Courses;