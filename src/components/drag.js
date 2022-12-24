//we are about to tryt to rewrite the shit in js to react
import React from "react";
import "../App.css";
import { useEffect } from "react";

function drag() {
    useEffect(() => { // we got to do use effect because it handles side effect 
        const manc = document.getElementById("q1")
        const yowc = document.getElementById("q2")
        const momc = document.getElementById("q3")
        const man = document.getElementById("man")
        const yow = document.getElementById("yow")
        const mom = document.getElementById("mom")
        const mainc = document.querySelector(".bigcontainer")
        //now we make events
        //q1s
        man.addEventListener("dragstart", () => {
            manc.addEventListener("dragover", () => {
                manc.appendChild(man)
                man.addEventListener("dragstart", () => {
                    mainc.appendChild(man)
                })
            })
        })
        //q2
        yow.addEventListener("dragstart", () => {
            yowc.addEventListener("dragover", () => {
                yowc.appendChild(yow)
                yow.addEventListener("dragstart", () => {
                    mainc.appendChild(yow)
                })
            })
        })
        //q3
        mom.addEventListener("dragstart", () => {
            momc.addEventListener("dragover", () => {
                momc.appendChild(mom)
                mom.addEventListener("dragstart", () => {
                    mainc.appendChild(mom)
                })
            })
        })


    }, []) // the empty arry outside theuse effect endures the effect is only ran once


    return (<div>
        <div className="main">
            <div>
                <div className="questions">
                    <div className="qcontain" id="q1">
                        I am cool
                    </div >
                    <div className="qcontain" id="q2">
                        are you cool
                    </div>
                    <div className="qcontain" id="q3">
                        She is crazy
                    </div>
                </div>
            </div>

            <div className="dig">
                <div className="bigcontainer">
                    <p className="draggables" draggable={true} id="man">mangi cool</p>
                    <p className="draggables" draggable={true} id="yow">yangi cool</p>
                    <p className="draggables" draggable={true} id="mom">mungi duff</p>

                </div>
            </div>

        </div>
    </div>)
}

export default drag;