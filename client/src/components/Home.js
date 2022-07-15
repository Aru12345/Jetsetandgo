import { useReducer } from "react";
import { useState } from "react";
import "./Styling.css"
import Carousel from 'react-bootstrap/Carousel';
function Home({user}){
    console.log(user)
    const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  
    return (<>
    <h1 className="greeting">Hey {user.name}! Welcome to JetSet</h1>
    <div class="frame">
    <Carousel variant="dark" >
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://assets.telegraphindia.com/telegraph/2020/Jul/1594320268_shutterstock_699697081.jpg"
          alt="First slide"
        />
       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://media.istockphoto.com/photos/woman-at-the-airport-picture-id1129005214?k=20&m=1129005214&s=612x612&w=0&h=qDQmZrU4sWvcTOxOFvRB6dfBxpCF4AfGiJjIwYGDEwY="
          alt="Second slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1527007622069-3a0241e1cd8c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YWlycG9ydCUyMHRlcm1pbmFsfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
          alt="Third slide"
        />
       
      </Carousel.Item>
    </Carousel>
    </div>
   
    </>)
}
export default Home;