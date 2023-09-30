import React, { useRef, useState } from "react";
import './contact.css';
import linkedIn from '../../assets/linkedin.svg';
import github from '../../assets/github.jpg';
import emailjs from "@emailjs/browser";

const Contact = () => {
    const form = useRef();
    const [isValid, setIsValid] = useState(true); // State to track form validation
    const [formValues, setFormValues] = useState({
        from_name: '',
        from_email: '',
        message: '',
    });

    const sendEmail = (e) => {
        e.preventDefault();

        if (validateForm()) {
            emailjs.sendForm('service_2ovrs08', 'template_3n41kyk', form.current, 'OnyQ8Rl_62mncfQO8')
                .then((result) => {
                    console.log(result.text);
                    console.log("Email delivered successfully");
                    clearForm();
                }, (error) => {
                    console.log(error.text);
                });
            alert('Email Successfully delivered');
        }
    };

    const validateForm = () => {
        const nameInput = formValues.from_name.trim();
        const emailInput = formValues.from_email.trim();
        const messageInput = formValues.message.trim();

        // Simple validation example (you can expand this as needed)
        if (nameInput === '' || emailInput === '' || messageInput === '') {
            setIsValid(false);
            return false;
        }

        setIsValid(true);
        return true;
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value,
        });
    };

    const clearForm = () => {
        setFormValues({
            from_name: '',
            from_email: '',
            message: '',
        });
    };

    return (
        <section id="contactPage">
            <div className="contact">
                <h1 className="contactPageTittle">Contact Me</h1>
                <span className="contactDesc">Please fill out the form below to discuss any work opportunities</span>
                <form ref={form} onSubmit={sendEmail} className="contactForm">
                    <input
                        type="text"
                        className="name"
                        placeholder="Your Name"
                        name="from_name"
                        value={formValues.from_name}
                        onChange={handleInputChange}
                    />
                    <input
                        type="email"
                        className="email"
                        placeholder="Your Email"
                        name="from_email"
                        value={formValues.from_email}
                        onChange={handleInputChange}
                    />
                    <textarea
                        className="msg"
                        name="message"
                        rows='5'
                        placeholder="Your Message"
                        value={formValues.message}
                        onChange={handleInputChange}
                    ></textarea>
                    {!isValid && <p className="error-message">Please fill out all fields.</p>}
                    <button type="submit" value="send" className="submitBtn">Submit</button>
                    <div className="links">
                        <a href="https://www.linkedin.com/in/ben-oketch-3930a4180/"><img src={linkedIn} alt="linkedin" className="link"></img></a>
                        <a href="https://github.com/BenAwuor2"><img src={github} alt="github" className="link"></img></a>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Contact;
