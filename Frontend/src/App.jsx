import React from 'react'
import Home from './Components/Home/home'
import Courses from './Components/courses/Courses'
import { Routes,Route } from 'react-router-dom'
import Signup from './Components/Signup'
import Contact from './Components/Contacts/Contact'   
const App = () => {
  return (
   <>
    <div className="dark:bg-slate-900 dark:text-white ">
  <Routes>
      <Route path="/" element={<Home/>}/>
    <Route path="/course" element={<Courses/>}/>
    <Route path="/signup" element={<Signup/>}/>
    <Route path="/contact" element={<Contact/>}/>
  </Routes>
    </div>
   </>
  )
}

export default App