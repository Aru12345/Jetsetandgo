import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./Styling.css"
function AirlinesCard({airline}){
     const{id,name,image,slogan,wlink}=airline;
    return(
      <div  className="airlinecard">
        
        <img className="cardimg"  src={image} />
        <Card.Title>{name}</Card.Title>
        <Card.Text>{slogan}</Card.Text>
        <Button variant="info" href={`/airlines/${id}`} >Enter</Button>
        <Button variant="primary" href={wlink} target="_blank" >Book your tickets</Button>
          
     </div>
    )
}
export default AirlinesCard;

/*
Card style={{ width: '18rem' }}>
<Card.Img variant="top" src={image} />
<Card.Body>
  <Card.Title>{name}</Card.Title>
  <Card.Text>
    {slogan}
<Card.Text>
  <Button variant="info" href={`/airlines/${id}`} >Enter</Button>
  <Button variant="primary" href={wlink} target="_blank" >Book your tickets</Button>
</Card.Body>
</Card>
<img src={image} />
*/
 