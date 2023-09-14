/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */


const Course = ({course}) => {
    const {image, title, description, price, credit_hours} =course;
    return (
        <div className="bg-white rounded-md p-4 mx-3">
            <div className="flex justify-center">
                <img src={image} alt="" />
                </div>
            <h2 className="font-semibold text">{title}</h2>
            <p>{description}</p>
            <div className="flex justify-between">
                <p>$ Price: {price}</p>
                <p>Credit: {credit_hours}</p>
            </div>
            <button className="w-full bg-blue-500 text-white rounded">Select</button>
        </div>
    );
};

export default Course;