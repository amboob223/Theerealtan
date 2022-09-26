import React from "react";
import "../App.css";
import Language from "./Language";
import Langdata from "./Langdata";

function Wolof(){
    //we got to make arrays with the data and 
    return(<>
    <Language
        name={Langdata[1].title}
        video={Langdata[1].video}
        vocab={Langdata[1].vocab}
        grammar={Langdata[1].grammar}
        />


    </>)
}

export default Wolof;