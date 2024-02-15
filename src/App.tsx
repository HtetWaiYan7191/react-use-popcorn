import React from 'react'
import { Button } from 'antd'
import Navbar from './components/Navbar'
import Main from './components/Main'
import StarRating from './components/StarRating'

const App = () => {
  return (
    <>
      <StarRating maxRating={10}/>
      {/* <Navbar/>
      <Main/> */}
    </>
  )
}

export default App