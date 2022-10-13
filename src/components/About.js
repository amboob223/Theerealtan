import React from 'react'
import "../App.css";
import {Link} from "react-router-dom";


function About() {
  return (<div className='about'>

    <div>
      <h1>What is the Wocktan?</h1>
      <p>The Word Wocktan is the Wolof word for conversation. 
        
        Wocktan is an a one of a kind platform for learning African languages and culture.
         The purpose of this app is to have more Africans speaking with each other; not about each other.
        We want to pereseve african languages and increase access to more African langauges. We hope eventually to incoporate all langauges found  through out the diaspora.
    
       We also provide a way for people to make income via our wocker service.
           
        </p>
        <h2>What is a Wocker?</h2>
        <p>A Wocker is someone who helps you to learn the language by speaking it with you to help you learn the language quickly.
          Wocktan's(conversation are over our zoom platform so we are checking for quality assurance). Any conversation
           outside the scope of learning (i.e solicitation or flirting or general inapporopriatness) will lead to an investigation or removal from the system.
            people recieving wockers can leave daily reviewson wockers.
            <br/>
          -A native speaker of any of the featured langugaes can be a wocker and earn income by being available when someone 
          requests a wocker. To sign up to be a wocker click the button below.

        </p>

        <h2>How to get a wocker?</h2>
        <p>press the button below to schedule a meeting with a wocker. 
          We will contact you to about which language you want to learn and we will connect you let you choose a wocker to practice with.
          Wocker service requires a $5 a month subscription fee which gives you full access to wocker scheduling and all the videos, notes,grammar and quiz material.
        </p>
<div class="abtbtn">
      <button>
        <Link 
        to="/contact"
        className='abtl'
        >
           beawock
        </Link>
       </button>

    <button>
      <Link 
        to="/contact"
        className="abtl"
        >
          getawock
        </Link>
      </button>
    
    </div>
    </div>
  </div>
  )
}

export default About