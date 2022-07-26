
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
        <Button className="btnp" variant="info" href={`/airlines/${id}`} >Enter</Button>
        <Button className="btnp"  variant="primary" href={wlink} target="_blank" >Book your tickets</Button>
          
     </div>
    )
}
export default AirlinesCard;

