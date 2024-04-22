import { Routes, Route } from "react-router-dom"
import Teachers from "./components/Teachers/Teachers.jsx"
import Students from "./components/Students/Students.jsx"
import Billing from './components/Billing/Billing.jsx'
import Settings from "./components/Settings/Settings.jsx"
import Exams from "./components/Exams/Exams.jsx"
import Features from "./components/Features/Features.jsx"
import Logo from "./assets/img/logo.svg"
import Dashboard from "./components/Dashboard/Dashboard.jsx"
import Navbar from './components/Navbar/Navbar.jsx'


function Authentification() {
  return (
    <div className=''>
      <div className='flex w-full'>
        <nav className='w-[19%] h-[100vh] bg-[#152259]'>
          <img className='m-auto mt-[30px]' src={Logo} alt="logo" />
          <h1 className='font-bold text-[14px] text-center mt-[22px] mb-[40px] text-white'>Udemy Inter. school</h1>
          <div className='w-full border-[1px] border-slate-500'></div>
          <Navbar/>
        </nav>
        <div className='w-[81%]'>
        <Routes>
          <Route path='/' element={<Dashboard/>}/>
           <Route path='/teachers' element={<Teachers/>}/>
           <Route path='/students' element={<Students/>}/>
           <Route path='/billing' element={<Billing/>}/>
           <Route path='/settings' element={<Settings/>}/>
           <Route path='/exams' element={<Exams/>}/>
           <Route path='/features' element={<Features/>}/>
        </Routes>
        </div>
       
      </div>
    </div>

  )
}

export default Authentification
