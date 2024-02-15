import React from "react";
import StarOutline from "./StarOutline";
import StarSolid from "./StarSolid";

const Star = ({
  onRating,
  fullStar,
  onHoverIn,
  onHoverOut,
  color,
  size
}: {
  onRating: () => void;
  onHoverIn: () => void;
  onHoverOut: () => void;
  color:string;
  size:number;
  fullStar: boolean;
}) => {
    const starStyle = {
        width: `${size}px`,
        height: `${size}px`,
        display: 'block',
        cursor: 'pointer'
    }
  return (
    <button style={starStyle} onClick={onRating} onMouseEnter={onHoverIn} onMouseLeave={onHoverOut}>
      {fullStar ? <StarSolid color={color} /> : <StarOutline color={color} />}
    </button>
  );
};

export default Star;
