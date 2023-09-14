import './App.css'
import Courses from './components/Courses/Courses'
import Credits from './components/Credits/Credits'
import Header from './components/Header/Header'

function App() {
  

  return (
    <>
     <Header></Header>
     <div className='md:flex px-14'>
     <Courses></Courses>
     <Credits></Credits>
     </div>
    </>
  )
}

export default App
