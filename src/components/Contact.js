import React, { useState } from 'react';
import '../App.css';

function Contact() {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    phone: '',
    beaWock: false,
    getaWock: false,
  });

  function formHandler(event) {
    const { name, type, checked, value } = event.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  }

  const submitHandler = async (event) => {
event.preventDefault();
    try {
       console.log(formData);

    const response = await fetch('http://localhost:5000/wocktan', {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(formData),
    });

    const data = await response.json();
    console.log(data);

    setFormData({
      fullname: '',
      email: '',
      phone: '',
      beaWock: false,
      getaWock: false,
    });

    alert(
      'This was successful. We will contact you in the next three business days with info on becoming or scheduling a Wocker.'
    );
    } catch (error) {
      console.error(error.message)
      console.log("No bueno")
    }
    
   
  };

  return (
    <div className="form">
      <form onSubmit={submitHandler}>
        <label htmlFor="fullname" className="forminput">
          Fullname:
          <input
            type="text"
            placeholder="fullname"
            id="fullname"
            onChange={formHandler}
            value={formData.fullname}
            name="fullname"
          />
        </label>
        <label htmlFor="email" className="forminput">
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
            id="getawock"
            onChange={formHandler}
            checked={formData.getaWock}
            name="getaWock"
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Contact;
