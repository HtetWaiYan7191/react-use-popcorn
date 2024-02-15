import React, { useState } from 'react'
import Star from './svgIcons/Star'

const StarRating = ({maxRating = 5}) => {
    const [rating, setRating] = React.useState(0)
    const [tempRating, setTempRating] = useState(0)
    const[selected, setSelected] = useState(0);
    
    const handleRating = (starRating: number) => {
        selected === starRating ? (setRating(0), setSelected(0)) : (setRating(starRating), setSelected(starRating));
    }
  return (
    <div className='flex gap-8 star-rating-container'>
        <div className="flex start-container ">
            {
                Array.from({length: maxRating}, (_, i) => (
                   <Star key={i} fullStar={ tempRating ? tempRating >= i + 1 : rating >= i + 1} onHoverIn={() => setTempRating(i+1)} onHoverOut={ () => setTempRating(0)} onRating={() => handleRating(i + 1)}/>
                ))
            }
        </div>
        <p>{tempRating || rating || ""}</p>
    </div>
  )
}

export default StarRating