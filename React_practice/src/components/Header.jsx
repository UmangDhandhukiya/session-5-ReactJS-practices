import React from 'react'
import { Link, NavLink } from 'react-router'

const Header = () => {
  return (
    <div className='bg-gray-400 flex justify-center items-center gap-12 py-6'>
       <NavLink to={"/"}>Home</NavLink>
       <NavLink to={"/team"}>Team</NavLink>
       <NavLink to={"/about"}>About</NavLink>

    </div>
  )
}

export default Header
