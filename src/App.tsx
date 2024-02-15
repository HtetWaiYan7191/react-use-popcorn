import React from 'react'
import { Button } from 'antd'
import Navbar from './components/Navbar'
import Main from './components/Main'
import StarRating from './components/StarRating'

const App = () => {
  return (
    <>
      <StarRating maxRating={10}/>
      <StarRating color='red' size={16} defaultRating={3} messages={['Bad', 'Terrible', 'Average', 'Good', 'Amazing']}/>

      {/* <Navbar/>
      <Main/> */}
    </>
  )
}

export default App