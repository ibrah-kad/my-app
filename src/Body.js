import React from "react";
import "../src/Body.css";

function Button() {
    return(
       <button className="button">Submit</button>
    );

}

export default function loginform(){ 
    const handleclick = ()=>{
        alert("Button Clicked");
    }
    return(<>
        <div className="container">
            <div className="card">
            
            <h1>Welcome...</h1>
            <label>Username</label><input type="text"></input><br></br>
            <label>password</label><input type="password"></input><br></br>
            <Button text="Submit"/>
            </div>
        </div>
        </>
    );
}

