import React from 'react'

const NumOfResults = ({length} : {length: number}) => {
  return (
    <h2>Found {length} Movies</h2>
  )
}

export default NumOfResults