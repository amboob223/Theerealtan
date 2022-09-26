import React from 'react'

import "../App.css";
import ReactPlayer from "react-player";
//language will be a parent app that gets passed into the  diffrent components


function Language(props) {
  return (
    <div>
      <div className='comp'>
        <h1>{props.name}</h1>
      </div>
      
      <div className='comp'>
      
      <ReactPlayer url={props.video}/>
      <h3>{props.tips}</h3> 
      </div>
      {/* the voca part */}
        <div className='main'>
      <div className='content'>

        
          <div className='content'>
            <h1>week 1 Vocab</h1>
         <div className='vocab'>
          
       {/* // all we need is a hash to be returned where that prop.vocab is but
          so lets move through the array with state through and array 
          what is we change the state
       */}

        <ul>
          
          {Object.keys(props.vocab).map(function(key,i){return(
            <li key={i}>{key}</li>)
          })}   
          </ul>

          <ul>
            {Object.values(props.vocab).map(function(value,i){return(
              <li key={i}>
              {value}
            </li>)
            })}
          </ul>
</div>
 </div>

            <div className='content'>
             <h1>week 1 Grammar </h1> 
         <div className='vocab'>
          <ul>
            {Object.keys(props.grammar).map(function(key,i){return(
              <li key={i}>
                {key}
              </li>
            )})}
</ul>
        <ul>
            {Object.values(props.grammar).map(function(value,i){return(
              <li key={i}>
                {value}
              </li>
            )})}
          
        </ul>
          {/* we are about to print out the keys and values next to each other  */}
          </div>
  </div>  
    </div>
      </div>   
    </div>
  )
}

export default Language;