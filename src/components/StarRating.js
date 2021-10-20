import StarComponent from "react-rating-stars-component";

const StartRating = ({ isStatic, inputRating, getRatingValue }) => {
  return (
    <>
      {isStatic ? (
        <ul className="stcomp">
          {[...Array(5)].map((star, index) => {
            index += 1;
            console.log("index", index);
            return (
              <>
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
              </>
            );
          })}
        </ul>
      ) : (
        <StarComponent
          size={30}
          isHalf={true}
          color="#E0E0E0"
          activeColor="#FDCE71"
          onChange={(rating) => getRatingValue(rating)}
        />
      )}
    </>
  );
};

export default StartRating;
