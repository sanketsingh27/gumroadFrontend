import "./App.css";
import TopSection from "./components/TopSection";
import ReviewList from "./components/ReviewList";
import { useSocket } from "./context/SocketContext";
import { useEffect, useState } from "react";

function App() {
  const [aveRating, setAveRating] = useState(0);
  const [reviews, setReviews] = useState(0);
  const socket = useSocket();

  const handleGetReviews = ({ averageRating, reviews }) => {
    setAveRating(averageRating);
    setReviews(reviews);
  };

  useEffect(() => {
    if (socket == null) return;

    socket.on("getReviews", handleGetReviews);
  }, [socket]);

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
