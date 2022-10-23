import React from "react";
import "../App.css";
import Language from "./Language";
import Langdata from "./Langdata";

function Geechie(){
    //we got to make arrays with the data and 
    
    return(<>
    <Language
        name={Langdata[2].title}
        video={Langdata[2].video}
        vocab={Langdata[2].vocab}
        grammar={Langdata[3].grammar}
        />


    </>)
}

export default Geechie;