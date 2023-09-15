import { useState } from 'react'
import './App.css'
import Courses from './components/Courses/Courses'
import Credits from './components/Credits/Credits'
import Header from './components/Header/Header'
import swal from 'sweetalert';

function App() {
  const [credits, setCredits] = useState([]);
  const [remaining, setRemaining] = useState(20);
  const [totalCredit, setTotalCredit] =useState(0)

  const handleSelectedCourse = (course) =>{
    const isExist = credits.find((item) =>item.id == course.id);
    if(remaining > 0 && course.credit_hours <= remaining){
      if(isExist){
        swal("Warning!", "Already take this course", "error");
      }
      else{
        const newCredits = [...credits, course];
        const newRemaining = remaining - course.credit_hours;
        const newTotal = totalCredit + course.credit_hours;
        setCredits(newCredits);
        setTotalCredit(newTotal);
        setRemaining(newRemaining);}
    }
    else{
      swal("Info!", "You can not take more than credit 20 hrs", "info");
    }
    };
    
  return (
    <>
     <Header></Header>
     <div className='md:flex gap-4 px-14'>
     <Courses handleSelectedCourse= {handleSelectedCourse}></Courses>
     <Credits credits={credits} remaining={remaining} totalCredit={totalCredit}></Credits>
     </div>
    </>
  )
}

export default App
