import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function AddreviewForm({ user }) {
  const navigate = useNavigate();

  const params = useParams();
  console.log(params);

  const [reviewData, setreviewData] = useState({
    image: "",
    date: "",
    destination: "",
    seat: "",
    description: "",
  });

  function handleReviewChange(event) {
    setreviewData({
      ...reviewData,
      [event.target.name]: event.target.value,
    });
  }

  function handleReviewSubmit(event) {
    event.preventDefault();

    const newReview = {
      ...reviewData,
      airline_id: params.id,
      user_id: user.id,
    };
    console.log(newReview);
    fetch(`/reviews`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newReview),
    })
      .then((r) => r.json())
      .then((newReview) => {
        setreviewData({
          image: "",
          date: "",
          destination: "",
          seat: "",
          description: "",
        });
      });
    navigate(-1);
  }

  return (
    <>
      <h1>Add a review</h1>
      <form onSubmit={handleReviewSubmit}>
        <label>Image:</label>
        <input
          type="text"
          name="image"
          aria-label="image"
          value={reviewData.image}
          onChange={handleReviewChange}
        ></input>
        <label>Date:</label>
        <input
          type="text"
          name="date"
          aria-label="date"
          value={reviewData.date}
          onChange={handleReviewChange}
        ></input>
        <label>Destination:</label>
        <input
          type="text"
          name="destination"
          aria-label="destination"
          value={reviewData.destination}
          onChange={handleReviewChange}
        ></input>
        <label>Seat:</label>
        <input
          type="text"
          name="seat"
          aria-label="seat"
          value={reviewData.seat}
          onChange={handleReviewChange}
        ></input>
        <label>Description:</label>
        <input
          type="text"
          name="description"
          aria-label="description"
          value={reviewData.description}
          onChange={handleReviewChange}
        ></input>

        <input className="submit" type="submit" />
      </form>
    </>
  );
}
export default AddreviewForm;
