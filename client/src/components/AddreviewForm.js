import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./Styling.css";
function AddreviewForm({ user }) {
  const navigate = useNavigate();

  const params = useParams();


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
    
    fetch(`/reviews`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newReview),
    })
      .then((r) => r.json())
      .then(
        setreviewData({
          image: "",
          date: "",
          destination: "",
          seat: "",
          description: "",
        })
      );
    navigate(-1);
  }

  return (
    <>
  
    <div className="rformcontainer">
    <Button variant="danger" onClick={() => navigate(-1)}  class="backb" type="submit" >
        X
      </Button>
      <h1 className="reviewformheading">Add a review</h1>

      <Form className="rform" onSubmit={handleReviewSubmit} >
      <Form.Group className="mb-3" >
        <Form.Label className="fheading">Image:</Form.Label>
        <Form.Control   type="text"
          name="image"
          aria-label="image"
          value={reviewData.image}
          onChange={handleReviewChange} placeholder="Enter image" />
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label className="fheading">Date:</Form.Label>
        <Form.Control   type="datetime-local"
          name="date"
          aria-label="date"
          value={reviewData.date}
          onChange={handleReviewChange} placeholder="Enter date" />
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label className="fheading">Destination:</Form.Label>
        <Form.Control   type="text"
          name="destination"
          aria-label="destination"
          value={reviewData.destination}
          onChange={handleReviewChange} placeholder="Enter destination" />
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label className="fheading">Class:</Form.Label>
        <Form.Control   type="text"
          name="seat"
          aria-label="seat"
          value={reviewData.seat}
          onChange={handleReviewChange} placeholder="Enter Seat" />
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label className="fheading">Description:</Form.Label>
        <Form.Control   type="text"
          name="description"
          aria-label="description"
          value={reviewData.description}
          onChange={handleReviewChange} placeholder="Enter description" />
      </Form.Group>

    
      <Button variant="primary"  type="submit" >
        Submit
      </Button>
    </Form>



      
    </div>
    </>
  );
}
export default AddreviewForm;
