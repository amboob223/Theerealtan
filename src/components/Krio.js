import React from "react";
import "../App.css";
import Langdata from "./Langdata";
import Language from "./Language";
import {useState} from "react";


function Krio(){
    //we got to make arrays with the data and 
    //so here we can make a function that changes the week when clicked so we make an array of the 
    const [idx,setIdx] = useState(0)

    function next(){
        setIdx(idx + 1)
    }

    function last(){
        setIdx(idx - 1)
    }

    const weeks = [Langdata[0].week1.vocab,Langdata[0].week2.vocab]
    const weekgr= [Langdata[0].week1.grammar,Langdata[0].week2.grammar] 
    return(<>
    

    <Language
        name={Langdata[0].title}
        video={Langdata[0].video}
        vocab={weeks[idx]}
        grammar={weekgr[idx]}
        />
    
        <button onClick={next}>next</button>
        <button onClick={last}>last</button>

    </>)
}

export default Krio;