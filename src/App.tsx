import React from 'react'
import { Button } from 'antd'
import Navbar from './components/Navbar'
import Main from './components/Main'
import StarRating from './components/StarRating'
import TextExpander from './components/TextExpander'

const App = () => {
  return (
    <>
      <StarRating maxRating={10}/>
      <StarRating color='red' size={16} defaultRating={3} messages={['Bad', 'Terrible', 'Average', 'Good', 'Amazing']}/>
      <TextExpander  buttonText='show more' collapseNumber={5} buttonColor='blue'>
       Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis amet qui, ipsam porro earum iure debitis facilis aperiam aliquid? Quas illum laboriosam nesciunt ex hic modi officia blanditiis nemo quod?
        </TextExpander>
      <TextExpander  defaultExpand={true} buttonText='show more' buttonColor='green'>
        this is htetwaiyan
        </TextExpander>

      {/* <Navbar/>
      <Main/> */}
    </>
  )
}

export default App