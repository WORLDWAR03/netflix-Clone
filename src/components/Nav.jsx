import React, { useEffect, useState } from 'react'
import "../styles/nav.css";

function Nav () {

const [show, setShow] = useState(false);
const transitionNavBar =()=>{
if (window.scrollY > 100) {
  setShow(true);
} else {
  setShow(false)
}
}

useEffect(()=> {
  window.addEventListener("scroll", transitionNavBar);
  return () => window.removeEventListener("scroll", transitionNavBar);

}, []);


  return (
<div className={`nav ${show && "nav_black"}`}>

    <div className='nav_contents'>
     <img className='nav_logo' src='https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png' alt='' ></img>
      

     <img className='nav_avatar' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxtdMcFlC3QJBzzMaZueluydKgSxJ8t7rdSmv8by0&s' alt='' ></img>



    </div>

    </div>    
  )
}

export default  Nav;