import React from 'react'

const MovieDetail = ({selectedMovie} : {selectedMovie: string}) => {
  return (
    <div>{selectedMovie}</div>
  )
}

export default MovieDetail