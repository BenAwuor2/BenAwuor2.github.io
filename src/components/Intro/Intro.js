import React from 'react';
import './Intro.css';
import bg from '../../assets/bg1.jpg';
// import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';

const Intro = () => {
    return (
        <section id='intro'>
            <div className='introContent'>
                <span className='hello'>Hello,</span>
                <span className='introText'>I'm <span className='introName'>Ben Oketch</span> <br/> Full-Stack Developer</span>
                <p className='introPara'> I am a skilled and passionate Web Developer with experience in creating<br/> visually appealing and user friendly websites.</p>
                <a href="https://github.com/BenAwuor2"><button className='btn'><FontAwesomeIcon icon={faBriefcase} />Hire Me</button></a>
            </div>
            <img src={bg}  alt='profile_img' className='bg'/>
        </section>
       
    )

}

export default Intro;