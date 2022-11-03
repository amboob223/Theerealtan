import React from "react";
import "../App.css";
import Language from "./Language";
import Langdata from "./Langdata";
import { useState } from "react";


function Gullah() {
    //we got to make arrays with the data and 
    const [idx, setIdx] = useState(0)

    const weeksg = [Langdata[2].week1.grammar, Langdata[2].week2.grammar, Langdata[2].week3.grammar, Langdata[2].week4.grammar, Langdata[2].week5.grammar]
    const weeksv = [Langdata[2].week1.vocab, Langdata[2].week2.vocab, Langdata[2].week3.vocab, Langdata[2].week4.vocab, Langdata[2].week5.vocab]
    const weeks = ["week 1 ", "week 2 ", "week 3 ", "week 4 ", "week 5 "]

    const next = () => {
        if (idx < weeks.length - 1) {
            setIdx(idx + 1)
        }
    }

    function last() {
        if (idx > 0) {
            setIdx(idx - 1)
        }
    }

    return (<>
        <Language
            name={Langdata[2].title}
            video={Langdata[2].video}
            vocab={weeksv[idx]}
            grammar={weeksg[idx]}
        />

        <div class="btnc">

            scroll through the weeks info
            <button onClick={next}>next</button>
            <button onClick={last}>last</button>
        </div>
    </>)
}

export default Gullah;