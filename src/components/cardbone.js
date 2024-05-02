import React from 'react';
import "../blog.css";
// import pic from "../images/wocktan.png";
import {Link} from "react-router-dom";

function Cardbone(props) {
  return (
<div>
<div className="blog-container">
        <div className="blog-box">
            <div className="blog-img">
                <img src={props.img} alt="logo"/>
            </div>

            <div className="blog-text">
                <span>{props.date}</span>
                <span>{props.author}</span>
                <h1 className='blog-title'>{props.title}</h1>
                {/* <Link to="#" class="blog-title">what has happen</a>
                <p>I am mad like baby racks that takeoff stuff was some bull right now we are just trying some stuff</p>
            <a href="#">read more</a> */}
                <p>{props.body}</p>
                <p><Link to= {props.path}>

                     read more
                </Link>
               
                </p>
            </div>
        </div>
    </div>


    </div>
  )
}

export default Cardbone