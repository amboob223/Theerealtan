import React from "react";
import "../App.css";
import Language from "./Language";
import Langdata from "./Langdata";
import {useState} from "react";

function Kreyol(){
    //we got to make arrays with the data and 
    //we will use state to change the index


    const [idx,setIdx] = useState(0)
    const videos=[Langdata[4].week1.video]
    const weekv = [Langdata[4].week1.vocab,Langdata[4].week2.vocab,Langdata[4].week3.vocab,Langdata[4].week4.vocab,Langdata[4].week5.vocab]
    const weekg = [Langdata[4].week1.grammar,Langdata[4].week2.grammar,Langdata[4].week3.grammar, Langdata[4].week4.grammar, Langdata[4].week5.grammar]
    const weeks = ["week 1", "week 2", "week 3 ", "week 4 ", "week 5 "]
         const next = () =>{
            if(idx < weekv.length - 1 ){
                setIdx(idx + 1)
            }
         }
         const last = () =>{
            if(idx > 0 ){
                setIdx(idx - 1)
            }
         }
    return(<>
    <Language
        name={Langdata[4].title}
        video={Langdata[4].video}
        vocab={weekv[idx]}
        grammar={weekg[idx]}
        week={weeks[idx]}
        />
        <div class="btnc">
        Scroll through the weeks infomation
        <button onClick={next}>next</button>
        <button onClick={last}>last</button>
        </div>

    </>)
}

export default Kreyol;