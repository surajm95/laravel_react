import React, { useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import ReactStars from "react-rating-stars-component";

const Review = () => {
  const [review, setreview] = useState([]);
  const [baseUrl, setbaseUrl] = useState("");


  async function fetchData() {
    let result = await fetch("http://127.0.0.1:8000/api/user/reviewapi");
    result = await result.json();
    setreview(result.reviewData);
    setbaseUrl(result.data);
  }

  useEffect(() => {
    fetchData();
  },[]);
  
  return (
    <div id="review">
    <Carousel>
      {review.map((review, index) => (
        <Carousel.Item key={index}>
          <img
            width={110}
            height={110}
            src={baseUrl + review.file_url}
            className=""
            alt="m"
            sizes="(max-width: 110px) 100vw, 110px"
          />
          <h3>{review.comment}</h3>
          <p className="text-danger">
            {review.name} {new Date(review.review_date).getUTCFullYear()}
          </p>
          <ReactStars
            count={5}
            size={24}
            value={review.rating}
            activeColor="#ffd700"
          />
          ,
        </Carousel.Item>
      ))}
    </Carousel>
    </div>
  );
};
export default Review;
