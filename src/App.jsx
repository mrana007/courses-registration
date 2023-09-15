import { useState } from 'react'
import './App.css'
import Courses from './components/Courses/Courses'
import Credits from './components/Credits/Credits'
import Header from './components/Header/Header'

function App() {
  const [credits, setCredits] = useState([]);
  const [remaining, setRemaining] = useState(20);
  const [totalCredit, setTotalCredit] =useState(0)

  const handleSelectedCourse = (course) =>{
    // const isExist = credits.find((item) =>{
    //   item.id == course.id
    //   let count = course.credit_hours;
    // if(isExist){
      //   return alert('already taken');
      // }
      // else{
      //   credits.forEach((item) =>{
      //     count = count + item.credit_hours;
      //   });
      const newCredits = [...credits, course];
      const newRemaining = remaining - course.credit_hours;
      const newTotal = totalCredit + course.credit_hours;
      setCredits(newCredits);
      setTotalCredit(newTotal);
      setRemaining(newRemaining);
    };
      
    
    // if(isExist){
    //   return alert('already taken');
    // }
    // else{
    //   credits.forEach((item) =>{
    //     count = count + item.credit_hours;
    //   });
  //     const totalRemaining =20 - count;
  //     console.log(count, totalRemaining);
  //     const newCredits = [...credits, course];
  //     setCredits(newCredits);
  //   }
    
  // } 
  return (
    <>
     <Header></Header>
     <div className='md:flex px-14'>
     <Courses handleSelectedCourse= {handleSelectedCourse}></Courses>
     <Credits credits={credits} remaining={remaining} totalCredit={totalCredit}></Credits>
     </div>
    </>
  )
}

export default App
