import { Link } from "react-router-dom";

function AirlinesCard({airline}){
     const{id,name,image,slogan,wlink}=airline;
    return(
        <>
        <img src={image} />
        <h2>{name}</h2>
        <h4>{slogan}</h4>
        <Link to={`/airlines/${id}`}><button >Enter</button></Link>
        <h3 ><a href={wlink} target="_blank">Book your tickets now!</a></h3>

        </>
    )
}
export default AirlinesCard;