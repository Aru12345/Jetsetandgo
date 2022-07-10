import { useReducer } from "react";

function Home({user}){
    return (<>
    <h1>Welcome {user.name}</h1>
    </>)
}
export default Home;