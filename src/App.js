import React from "react";
import "./style.css";

export default function App() {

  return(
function Info (){
< div className='star'> 
<img src= "" alt="" />
<h1> Muyiwa Ayomide</h1>
</div>
  
  

  function Contacts () {
    return(
      <div className=" contact_info">
        <h3> phone no:+2348135752549</h3>
        <h3> email:obaremimuyiwa@gmail.com</h3>
      </div>
    )
  }
  function App(){
    return(
    <div className="outerReactangle" >
  
    <Info />
    <Contacts/>
    </div>
    )
  
    }
  Reactdom.render(document.getElementById("root"))