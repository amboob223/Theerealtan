import React from "react";
import "../App.css";
import Language from "./Language";
import Langdata from "./Langdata";

function Krio(){
    //we got to make arrays with the data and 
    return(<>
    <Language
        name={Langdata[0].title}
        video={Langdata[0].video}
        vocab={Langdata[0].vocab}
        grammar={Langdata[0].grammar}
        />


    </>)
}

export default Krio;