import React,{useState} from 'react'
import "../App.css"
import axios from 'axios'

function Contact() {

   const [formData,setFormData] = useState({
    fullname:"",
    email:"",
    phone:"",
    beaWock:false,
    getaWock:false
   })

  

   function formHandler(event){
     const {name,type,checked,value} = event.target

     setFormData(formData =>{
      return {
            ...formData,
         [name]:type === "checkbox" ? checked : value 
      }}) // notice how we used the brackets here
     
   }





   const submitHandler = (event) =>{
    event.preventDefault()
     console.log(formData)

     //this is the data we use to post through axios so we got to make an object to pass in the request and then we do a then with the response and then we use that in a callbackfunction and rest the the state of every thing 
     const data ={
      Fullname:formData.fullname,
      Email:formData.email,
      Phone:formData.phone,
      BeaWock:formData.beaWock,
      GetaWock:formData.getaWock
     }
// after we make the object that connects our request to state as values and then we pass in below and in the then callback we reinitialize the state of everything
     axios.post("https://sheet.best/api/sheets/b902b852-a3e6-49b8-81c9-debc53a29729",data).then(
      (response) =>{
        console.log(response)
        //clearing fields
        setFormData({ fullname:"",
        email:"",
        phone:"",
        beaWock:false,
        getaWock:false})
      }
    
     ) 
      alert("this was sucessful")
   } // here is where we will be making the call to the google sheets


  return (
    <div className="form">
      <form onSubmit={submitHandler}>
        <label htmlFor="fullname" className='forminput'>
          Fullname:
          <input 
            type="text"
            placeholder="fullname"
            id="fullname"
            onChange={formHandler}
            
            value={formData.fullname} 
            name="fullname" // we got to put the name attribute for it to show
            />
        </label>
        <label htmlFor= "email" className="forminput">
            Email:
         <input 
            type="text"
            placeholder="email"
            id="email"
            onChange={formHandler}
            
            value={formData.email} 
            name="email"
            />
      </label>
      <label htmlFor="phone" className="forminput">
          Phone:
         <input 
            type="text"
            placeholder="phone"
            id="phone"
            onChange={formHandler}
            
            value={formData.phone} 
            name="phone"
            />
      </label>

      <label htmlFor="beawock" className="forminput">
Would you like to be a wocker?
        <input 
            type="checkbox"
            placeholder="beawock"
            id="beawock"
            onChange={formHandler}
           
            checked={formData.beaWock} 
            name="beaWock"
            />
        </label>
        <label htmlFor="getawock" className="forminput">
          Would you like to get a Wocker?
          <input 
            type="checkbox"
            placeholder="getawock"
            id="getawock"
            onChange={formHandler}
           
            checked={formData.getaWock} 
            name="getaWock"
            />
         </label>
        <button>
          submit
        </button>
    </form>
    </div>
    
  )
}

export default Contact