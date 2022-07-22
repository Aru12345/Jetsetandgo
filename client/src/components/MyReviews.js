import "./Styling.css"
import { Card } from "react-bootstrap";
function MyReviews({u}){
    const{image,date,destination,seat,description,likes,dislikes,airline_id,user_id}=u;
    
    console.log("u: ",u)
    return(
        <div className="myreviewcard" >
         <img  className="cardimg" src={image} />
        <p></p>
        <h6>{date}</h6>
        <h5>{destination}</h5>
        <h5>{seat}</h5>
        <Card.Text>{description}</Card.Text>
        <p></p>
        <h6>Likes: {likes}</h6>
         <h6>Dislikes: {dislikes}</h6>
      
        </div>
    )
}
export default MyReviews;