import {useParams} from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./Styling.css"
function ReviewCard({review,handleDelete,onUpdateReview,user}){
    const {id}=useParams();
    const{image,date,destination,seat,description,likes,dislikes,user:reviewuser}=review;
   
    

      function handleDeleteClick() {
      fetch(`/reviews/${review.id}`, {
        method: "DELETE",
      })
        handleDelete(review.id)
    }
  


    function handleLikeClick() {
      
  
      fetch(`/reviews/${review.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ likes: review.likes + 1 }),
      })
        .then((r) => r.json())
        .then((updatedReview) => {
          onUpdateReview(updatedReview);
        });
    }

  
  
    function handleDislikeClick() {
      
  
      fetch(`/reviews/${review.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({dislikes: review.dislikes+1}),
      })
        .then((r) => r.json())
        .then((updatedReview) => {
          onUpdateReview(updatedReview);
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
      
       {user.id!==reviewuser.id&&<Button onClick={handleLikeClick} className ="btn btn-success"  >👍🏻 </Button> }

       {user.id!==reviewuser.id&& <Button onClick={handleDislikeClick} className ="btn btn-danger"  >👎🏻  </Button>}
        <hr />
        
        {user.id===reviewuser.id&&<Button  className ="btn btn-primary" onClick={handleDeleteClick}  >Delete</Button>}
        
          
    
        
        </div>
    )
}
export default ReviewCard;

