import React from "react";
import "../App.css";
import Language from "./Language";
import Langdata from "./Langdata";
import {useState} from "react";


function Wolof(){
    //we got to make arrays with the data and 
    //we are goin go to use state to go through the weeks

    const [idx,setIdx]=useState(0)

    function next(){
        if(idx < weeks.length){
            setIdx(idx+1)
        }
    }

    function last(){
        if(idx > 0 ){
            setIdx(idx-1)
        }
    }
    const vocabs=[Langdata[1].week1.vocab,Langdata[1].week2.vocab]
    const grammars=[Langdata[1].week1.grammar,Langdata[1].week2.grammar]
    const weeks = ["week 1 ","week 2 ","week 3 "];

    return(<>
    <Language
        name={Langdata[1].title}
        video={Langdata[1].video}
        vocab={vocabs[idx]}
        week={weeks[idx]}
        grammar={grammars[idx]}
        />

    <button onClick={next}>next</button>
    <button onClick={last}>last</button>
    </>)
}

export default Wolof;