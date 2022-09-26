import React from "react";
import "../App.css";
import Language from "./Language";
import Langdata from "./Langdata";

function Yoruba(){
    //we got to make arrays with the data and 
    return(<>
    <Language
        name={Langdata[3].title}
        video={Langdata[3].video}
        vocab={Langdata[3].vocab}
        grammar={Langdata[3].grammar}
        />


    </>)
}

export default Yoruba;