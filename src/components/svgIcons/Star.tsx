import React from "react";
import StarOutline from "./StarOutline";
import StarSolid from "./StarSolid";

const Star = ({
  onRating,
  fullStar,
  onHoverIn,
  onHoverOut
}: {
  onRating: () => void;
  onHoverIn: () => void;
  onHoverOut: () => void;
  fullStar: boolean;
}) => {
  return (
    <button onClick={onRating} onMouseEnter={onHoverIn} onMouseLeave={onHoverOut}>
      {fullStar ? <StarSolid /> : <StarOutline />}
    </button>
  );
};

export default Star;
