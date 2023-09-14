import { useState } from 'react'
import './App.css'
import Courses from './components/Courses/Courses'
import Credits from './components/Credits/Credits'
import Header from './components/Header/Header'

function App() {
  const [credits, setCredits] = useState([]);
  const handleSelectedCourse = course =>{
    const isExist = credits.find((item) =>item.id == course.id);
    if(isExist){
      return alert('already taken');
    }
    else{
      const newCredits = [...credits, course];
      setCredits(newCredits);
    }
    
  } 
  return (
    <>
     <Header></Header>
     <div className='md:flex px-14'>
     <Courses handleSelectedCourse= {handleSelectedCourse}></Courses>
     <Credits credits={credits}></Credits>
     </div>
    </>
  )
}

export default App
