import React from "react";
import "../App.css";
import Language from "./Language";
import Langdata from "./Langdata";
import { useState } from "react";
function Yoruba() {
    //we got to make arrays with the data and 

    const [idx, setIdx] = useState(0)

    function next() {
        if (idx < weeks.length - 1) {
            setIdx(idx + 1)
        }
    }

    function last() {
        if (idx > 0) {
            setIdx(idx - 1)
        }
    }
    const vocabs = [Langdata[3].week1.vocab, Langdata[3].week2.vocab, Langdata[3].week3.vocab, Langdata[3].week4.vocab, Langdata[3].week5.vocab]
    const grammars = [Langdata[3].week1.grammar, Langdata[3].week2.grammar, Langdata[3].week3.grammar, Langdata[3].week4.grammar, Langdata[3].week5.grammar]
    const weeks = ["week 1 ", "week 2 ", "week 3 ", "week 4 ", "week 5 "];

    return (<>
        <Language
            name={Langdata[3].title}
            video={Langdata[3].video}
            vocab={vocabs[idx]}
            week={weeks[idx]}
            grammar={grammars[idx]}
        />

        <div class="btnc">

            scroll through the weeks info
            <button onClick={next}>next</button>
            <button onClick={last}>last</button>
        </div>
    </>)
}

export default Yoruba;