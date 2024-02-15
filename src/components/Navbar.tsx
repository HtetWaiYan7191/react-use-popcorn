import React from 'react'
import Logo from './Logo'
import SearchBar from './SearchBar'
import NumOfResults from './NumOfResults'

const Navbar = () => {
  return (
    <nav>
        <Logo/>
        <SearchBar/>
        <NumOfResults/>
    </nav>
  )
}

export default Navbar