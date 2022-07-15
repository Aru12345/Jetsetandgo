import {useParams} from "react-router-dom";

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
        <>
        <img src={image} />
        <h3>{date}</h3>
        <h3>{destination}</h3>
        <h3>{seat}</h3>
        <h3>{description}</h3>
        <h3>{likes}</h3>
        <h3>{dislikes}</h3>
        <cite>By {review.user.name}</cite>
        <button className ="btn btn-primary" onClick={handleDeleteReview}>Delete</button>
        </>
    )
}
export default ReviewCard;