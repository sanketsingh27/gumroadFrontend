import "./App.css";
import TopSection from "./components/TopSection";
import ReviewList from "./components/ReviewList";
import { useSocket } from "./context/SocketContext";
import { useCallback, useEffect, useState } from "react";

function App() {
  const [aveRating, setAveRating] = useState(0);
  const [reviews, setReviews] = useState([]);
  const socket = useSocket();

  const handleGetReviews = ({ averageRating, reviews }) => {
    setAveRating(averageRating);
    setReviews(reviews);
  };

  const handleNewReview = useCallback(
    (newReview) => {
      setReviews([...reviews, newReview]);
    },
    [reviews, setReviews]
  );

  useEffect(() => {
    if (socket == null) return;

    socket.on("getReviews", handleGetReviews);
    socket.on("newReview", handleNewReview);
  }, [socket, handleNewReview]);

  return (
    <>
      <div className="container">
        <h1>The Minimalist Entrepreneur.</h1>
        <TopSection reviews={reviews} setReviews={setReviews} averageRating={aveRating} />
        <br />
        <br />
        <hr />
        {reviews.length > 0 && <ReviewList reviews={reviews} />}
      </div>
    </>
  );
}

export default App;
