import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import "./Contact.css";
import Footer from '../Footer/Footer'

const Contact = () => {
  const [message, setMessage] = useState("");

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  const handleClick = (event) => {
    event.preventDefault();

    if (message.trim().length !== 0) {
      alert('Your message is sent successfully')
    } else {
      alert('Please fill all fields')
    }
  };
  return (
    <div className="contwal">
      <Navbar />
      <div className="contact">
        <div className="aps">
          <div style={{ paddingTop: "30px" }}>
            <label className="contactla">Name</label>
            <input
              name="firstName"
              className="contactput"
             onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="email" className="contactla">
              Email
            </label>
            <input
              className="contactput"
              name="email"
              id="lastName"
             onChange={handleChange}
            />
          </div>
          <div>
            <label className="contactla">Message</label>
            <textarea name="message" id="message" 
           onChange={handleChange} 
            />
          </div>

          <button className="contactbut" 
         onClick={handleClick}
          >
            SEND
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
