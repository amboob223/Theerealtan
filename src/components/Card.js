import React from "react";
import "../App.css";
import {Link} from "react-router-dom";

function Card(props){
    return(<>
    <div className="card">
            <img src={props.img} alt="logo"/>
    <Link
    className="scrollink"
    to={props.path}>

    <h1>{props.name}</h1>
    
    </Link>
        <h3>{props.des}</h3>
    </div>
    
    </>) // props is a parenet component
}

export default Card;