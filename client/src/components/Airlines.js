import AirlinesCard from "./AirlinesCard";

function Airlines({airlines}){
    return(
        <>
        <h1>Airlines</h1>
        {airlines.map((airline)=>{
            return (
                <> 
                <AirlinesCard key={airline.id} id={airline.id} airline={airline} />
                
                </>
            )
        })

        }
        </>
    )
}
export default Airlines;