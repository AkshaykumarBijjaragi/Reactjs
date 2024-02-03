import { useState } from "react";
// import "./index.css";
const StarRatings = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const handleStarClick = (selectedRating) => {
    setRating(selectedRating);
  };

  let tempRating = rating;
  const handleStarHover = (star) => {
    setHover(star);
  };
  const handleStarLeave = (star) => {
    setHover(0);
    setRating(tempRating);
  };

  return (
    <div>
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          onClick={() => handleStarClick(star)}
          data-value={star}
          style={{
            color: star <= (rating || hover) ? "gold" : "gray",
            fontSize: "3rem",
          }}
          onMouseEnter={() => handleStarHover(star)}
          onMouseLeave={handleStarLeave}
        >
          &#9733; {/* Unicode character for a star */}
        </span>
      ))}
      <p>Selected Rating: {rating}</p>
    </div>
  );
};

export default StarRatings;
