import { useState } from "react";
import Star from "react-rating-stars-component";

const StartRating = ({ isStatic, inputRating, getRatingValue }) => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  const handleRating = (rating) => {
    setRating(rating);
    getRatingValue(rating);
  };

  return (
    <>
      <ul className="stcomp">
        {[...Array(5)].map((star, index) => {
          index += 1;
          console.log("index", index);
          return (
            <>
              {isStatic ? (
                <li
                  key={index}
                  className={index <= inputRating ? `star star-filled` : "star"}
                  style={{
                    background:
                      index - 1 < inputRating && inputRating < index
                        ? "linear-gradient(90deg, #ffcd69 50%, #e0e0e0 50%)"
                        : null,
                  }}
                ></li>
              ) : (
                <li
                  key={index}
                  className={index <= (hover || rating) ? `star star-filled` : "star"}
                  onClick={() => handleRating(index)}
                  onMouseEnter={() => setHover(index)}
                  onMouseLeave={() => setHover(rating)}
                ></li>
              )}
            </>
          );
        })}
      </ul>
    </>
  );
};

export default StartRating;
