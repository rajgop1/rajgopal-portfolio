import React, { useRef } from 'react'
import { FaWhatsapp } from "react-icons/fa"
import { MdOutlineEmail } from "react-icons/md"
import emailjs from 'emailjs-com'
import "./contact.css"
function Contact() {
  const [formData, setFormData] = React.useState({ name: "", email: "", message: "" })
  const [submitted, setSubmitted] = React.useState(false)
  

  function handleChange(e) {
    let { name, value } = e.target

    setFormData((prev) => ({ ...prev, [name]: value }))
    
  }
  console.log(submitted)
  const form = useRef()
  function sendEmail(e) {
    e.preventDefault()
    emailjs.sendForm("service_tsd7zp7", "template_cbzl8fq", form.current, "Hy0j9urPfNGQJv6Y1").then(()=>{
    
      setSubmitted(true)
      setFormData({ name: "", email: "", message: "" })
      
  })
      
  }
  return (
    <div id="contact" className='contact'>
      <div className='contact-heading top'>
        <h4>Get in Touch</h4>
        <h2>Contact Me</h2>

      </div>
      <div className='contact-container'>

        <div className='contact-left'>
          <div className='contact-left-container'>
            <div className='contact-card'>
              <a target="_blank" href="mailto:rajgopaljakhmola@gmail.com" >
                <MdOutlineEmail />
                <h3>Email</h3>


              </a>
            </div>
            <div className='contact-card'>
              <a href="https://api.whatsapp.com/send?phone=917302433910" target="_blank">
                <FaWhatsapp />
                <h3>Whatsapp</h3>
              </a>
            </div>

          </div>
        </div>
        <div className='contact-right'>


          <form ref={form} onSubmit={sendEmail}  className='contact-right-container'>
            <input
              type="text"
              placeholder="Your Full Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              className='user-details'
              placeholder="Your Message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
            <input type="submit" className='send-message' value="submit"/>

            { submitted && <div className='succesful'>Thanks! Your Message has been sent!</div>}
          </form>

        </div>
      </div>
    </div>

  )
}
export default Contact