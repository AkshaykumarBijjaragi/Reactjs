import { useState } from "react";

const StarRatings = () => {
  const [rating, setRating] = useState(0);

  const handleStarClick = (selectedRating) => {
    setRating(selectedRating);
  };

  return (
    <div>
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          onClick={() => handleStarClick(star)}
          style={{
            cursor: "pointer",
            color: star <= rating ? "gold" : "gray",
            fontSize: "4rem",
            cursor: "pointer",
          }}
        >
          &#9733; {/* Unicode character for a star */}
        </span>
      ))}
      <p>Selected Rating: {rating}</p>
    </div>
  );
};

export default StarRatings;
