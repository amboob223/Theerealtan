import React from "react";
import "../App.css";
import Langdata from "./Langdata";
import Language from "./Language";
import { useState } from "react";


function Krio() {
    //we got to make arrays with the data and 
    //so here we can make a function that changes the week when clicked so we make an array of the 
    const [idx, setIdx] = useState(0)

    function next() {
        if (idx < weeks.length - 1) {
            setIdx(idx + 1)
        }

    }
    // now we got to figure how  add info for the otehr weeks and langi
    function last() {
        if (idx > 0) {

            setIdx(idx - 1)
        }

    }
    // 5 weeks
    const weeks = [Langdata[0].week1.vocab, Langdata[0].week2.vocab, Langdata[0].week3.vocab, Langdata[0].week4.vocab, Langdata[0].week5.vocab,]
    const weekgr = [Langdata[0].week1.grammar, Langdata[0].week2.grammar, Langdata[0].week3.grammar, Langdata[0].week4.grammar, Langdata[0].week5.grammar]
    const wk = ["week 1 ", "week 2 ", "week 3 ", "week 4 ", "week 5 "]
    const videos = [Langdata[0].week1.video, Langdata[0].week2.video, Langdata[0].week3.video, Langdata[0].week4.video, Langdata[0].week5.video,]
    return (<>


        <Language
            name={Langdata[0].title}
            video={videos[idx]}
            vocab={weeks[idx]}
            grammar={weekgr[idx]}
            week={wk[idx]}
        />
        <div class="btnc">

            scroll through the weeks info
            <button onClick={next}>next</button>
            <button onClick={last}>last</button>
        </div>

    </>)//so with the click evenst we change as we pass in the props 
}

export default Krio;