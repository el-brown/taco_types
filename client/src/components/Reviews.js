import React, { useState, useEffect } from "react";
import axios from 'axios';
import Review from "./Review";

const Reviews = () => {
  const [reviews, setReviews] = useState([])
  
  useEffect(() => {
    getReviews()
  }, []);
  
  const getReviews = async () => {
    try {
      let res = await axios.get(`Reviews`)
      console.log(res)
      setReviews(res.data)
    } catch (error) {
    };
  }; 

  const renderReviews = () => {
    return reviews.map((r) => <Review
    key={r.id} {...r} />);
  }

  return (
    <div>
      <h1>Reviews</h1>
      {renderReviews()}
    </div>
  );
};

export default Reviews