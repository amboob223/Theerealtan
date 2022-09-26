import React from "react";
import "../App.css"
import Dropdata from "./Dropdata";
import {Link} from "react-router-dom";

function Dropdown(){
    return(<div className="dropp">
        <ul>{Dropdata.map(function(lang,i){return(
            <li key={i}>
                <Link
                    to={lang.path}
                    className={lang.cname}
                    >
                    {lang.name}  
                    </Link>
            </li>
        )})}
        </ul>
    </div>)
}

export default Dropdown;