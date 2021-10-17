import "./App.css";
import TopSection from "./components/TopSection";
import ReviewList from "./components/ReviewList";

import io from "socket.io-client";

import { useEffect, useState } from "react";

function App() {
  const [aveRating, setAveRating] = useState(0);
  const [reviews, setReviews] = useState(0);
  const [socket, setSocket] = useState(undefined);

  const handleGetReviews = ({ averageRating, reviews }) => {
    setAveRating(averageRating);
    setReviews(reviews);
  };

  useEffect(() => {
    const socketIo = io("http://localhost:5500", {
      transports: ["websocket", "polling", "flashsocket"],
    });
    setSocket(socketIo);
    socketIo.on("getReviews", handleGetReviews);
    // fetchReviews();
  }, []);

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
