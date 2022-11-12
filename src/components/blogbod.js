import React from 'react'
import "../blog.css"
import {Link} from "react-router-dom"

function blogbod(props) {
  return (
    <div className="blogw">
        <h1>
            {props.title}
        </h1>
        <h3>
            {props.author}
        </h3>
        <h3>
            {props.date}
        </h3>
        <h3 className="blogww">
            {props.body}
        </h3>
        
        
    </div>
  )
}

export default blogbod