import React from "react";
import "../App.css";
import Language from "./Language";
import Langdata from "./Langdata";

function Kreyol(){
    //we got to make arrays with the data and 
    return(<>
    <Language
        name={Langdata[4].title}
        video={Langdata[4].video}
        vocab={Langdata[4].vocab}
        grammar={Langdata[4].grammar}
        />


    </>)
}

export default Kreyol;