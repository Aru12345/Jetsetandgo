import {useParams} from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./Styling.css"
function ReviewCard({review,onDeleteReview}){
    const {id}=useParams();
    const{image,date,destination,seat,description,likes,dislikes,airline_id,user_id}=review;
   

  function handleDeleteReview() {
    fetch(`/reviews/${id}`, {
      method: "DELETE",
    }).then((r) => {
      if (r.ok) {
        onDeleteReview(review);
      }
    });
  }

    return(
        <div className="reviewcard">


        
        <img  className="cardimg" src={image} />
        <p></p>
        <h6>{date}</h6>
        <h5>{destination}</h5>
        <h5>{seat}</h5>
        <Card.Text>{description}</Card.Text>
        <Card.Title>By {review.user.name}</Card.Title>
        <p></p>
        <h6>Likes: {likes}</h6>
         <h6>Dislikes: {dislikes}</h6>

        <br/>

        <Button  className ="btn btn-success"  >👍🏻 </Button>

        <Button  className ="btn btn-danger"  >👎🏻  </Button>
        <hr />
        
        <Button  className ="btn btn-primary"  onClick={handleDeleteReview}>Delete</Button>
        
          
    
        
        </div>
    )
}
export default ReviewCard;

