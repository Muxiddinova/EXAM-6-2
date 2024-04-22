import React from 'react'
import NavbarLink from '../NavbarLink/NavbarLink'
import { Dashboard, Students, Billing, Settings, Exams, Features } from '../../assets/img/Icons,'
import newLogo from "./../../assets/img/newLogo.svg"

function Navbar() {
  return (
    <nav>
      <div className='text-white ml-[28px] '>
        <NavbarLink  url={"/"} title='Dashboard'>
          <Dashboard />
        </NavbarLink>
        <NavbarLink url={"/teachers"}  title='Teachers'>
          <Dashboard />
        </NavbarLink>
        <NavbarLink url={"/students"} title='Students'>
          <Students />
        </NavbarLink>
        <NavbarLink url={"/billing"} title='Billing'>
          <Billing />
        </NavbarLink>
        <NavbarLink url={"/settings"} title='Setting and profile'>
          <Settings />
        </NavbarLink>
        <NavbarLink url={"/exams"} title='Exams'>
          <Exams />
        </NavbarLink>
      </div>
      <div className='flex text-white ml-[28px] mt-[137px]'>
          <NavbarLink url={"/features"} title='Features' >
            <Features />
          </NavbarLink>
          <img className='ml-[24px]' src={newLogo} alt="" />
        </div>
    </nav>
  )
}

export default Navbar