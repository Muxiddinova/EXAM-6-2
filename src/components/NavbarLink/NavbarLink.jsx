import React from 'react'

import { NavLink } from 'react-router-dom'

function NavBarLink({children, title, url}) {
  return (
    <NavLink className={'flex items-center space-x-[20px] py-[15px]'} to={url} >
        {children}
        <span className='font-semibold text-[18px]'>{title}</span>
    </NavLink>
  )
}

export default NavBarLink