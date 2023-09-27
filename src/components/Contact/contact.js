import React, { useRef } from "react";
import './contact.css';
import linkedIn from '../../assets/linkedin.svg';
import github from '../../assets/github.jpg';
import emailjs from "@emailjs/browser";

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_2ovrs08', 'template_3n41kyk', form.current, 'OnyQ8Rl_62mncfQO8')
          .then((result) => {
              console.log(result.text);
              console.log("Email delivered successfully");
          }, (error) => {
              console.log(error.text);
          })
          alert('Email Successfully delivered');
      };

    return (
        <section id="contactPage">
            <div className="contact">
                <h1 className="contactPageTittle">Contact Me</h1>
                <span className="contactDesc">Please fill out the form below to discuss any work opportunities</span>
                <form ref={form} onSubmit={sendEmail} className="contactForm">
                    <input type="text" className="name" placeholder="Your Name" name="from_name"/>
                    <input type="email" className="email" placeholder="Your Email" name="from_email"/>
                    <textarea className="msg" name="message" rows='5' placeholder="Your Message"></textarea>
                    <button type="submit" value="send" className="submitBtn" >Submit</button>
                    <div className="links">
                        <a href="https://www.linkedin.com/in/ben-oketch-3930a4180/"><img src={linkedIn} alt="linkedin" className="link"></img></a> 
                        <a href="https://github.com/BenAwuor2"><img src={github} alt="github" className="link"></img></a>
                        {/* <img src={} alt="" className="link"></img> */}
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Contact;