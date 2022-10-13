import React,{useState} from "react";
import "../App.css";
import cardData from "./cardData";
import Card from "./Card";

function Scroller(){
    //we need state here to move across the objects in when a button is presses
    // bring card in as a parent component allos us to give it diffeent children
    //we need the arry of data for state to move and to populate the parent componenet
    //create state
    const [idx,setIdx] = useState(0)

    //state method
    const up = (event) =>{
        if(idx < cardData.length - 1){
            setIdx(idx +1)
        }
    }

    function down(event){
        if(idx > 0 ){
            setIdx(idx-1)
        }
    }

    const titles = cardData.map(function(lang){return lang.name})//remember map goes through the data and makes a new array
    const pics = cardData.map(function(lang){return lang.img})//this makes an array of img paths
    const descriptions = cardData.map(function(lang){return lang.des})
    const paths= cardData.map(function(lang){return lang.path})
    return(<>
        <div className="scroll">
             <Card
             path={paths[idx]}
            img={pics[idx]}
            name={titles[idx]}
            des={descriptions[idx]}
        />
        </div>
       
        <div className="scroll">
         <button onClick={up}>next</button>
        <button onClick={down}>down</button>
        </div>

    </>)
}

export default Scroller;