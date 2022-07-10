

function AirlinesCard({airline}){
     const{name,image,slogan,wlink}=airline;
    return(
        <>
        <img src={image} />
        <h2>{name}</h2>
        <h4>{slogan}</h4>
        <h3 ><a href={wlink} target="_blank">Book your tickets now!</a></h3>
        </>
    )
}
export default AirlinesCard;