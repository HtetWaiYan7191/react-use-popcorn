import React, { useState } from 'react'
import Star from './svgIcons/Star'

const StarRating = ({maxRating = 5,  color="#fcc419", size=32, messages=[], defaultRating=0, onHandleRating = (starRating) => {} }) => {
    const [rating, setRating] = React.useState(defaultRating)
    const [tempRating, setTempRating] = useState(0)
    const[selected, setSelected] = useState(defaultRating);
    
    const handleRating = (starRating: number) => {
        selected === starRating ? (setRating(0), setSelected(0)) : (setRating(starRating), setSelected(starRating), onHandleRating(starRating));
    }
  return (
    <div className='flex items-center justify-center gap-x-8 star-rating-container'>
        <div className="flex items-center justify-center start-container ">
            {
                Array.from({length: maxRating}, (_, i) => (
                   <Star key={i} color={color} size={size} fullStar={ tempRating ? tempRating >= i + 1 : rating >= i + 1} onHoverIn={() => setTempRating(i+1)} onHoverOut={ () => setTempRating(0)} onRating={() => handleRating(i + 1)}/>
                ))
            }
        </div>
        <p style={{color: color}}>{ maxRating === messages.length ? messages[tempRating ? tempRating-1 :  rating-1] :  tempRating || rating || ""}</p>
    </div>
  )
}

export default StarRating