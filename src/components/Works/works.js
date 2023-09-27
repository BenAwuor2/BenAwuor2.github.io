import React from "react";
import './works.css';
import { Link } from "react-scroll";
import gofullstack from '../../assets/go-fullstack.png';
import fullmotion from '../../assets/fullmotion.png';
import portfolio from "../../assets/Portfolio.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowUpRightFromSquare} from "@fortawesome/free-solid-svg-icons";


const Works = () => {
    return (
        <section id="works">
            <h2 className="worksTittle">My Portfolio Projects</h2>
            <span className="worksDesc">I take part in ensuring I pay attention to details and deliver my project on time </span>
            <div className="portfolio">
                <div className="portfolio-profile">
                    <Link className="LiveDemo" placeholder="Live Demo"><img src={gofullstack} alt="AppImg" className="AppImg"/></Link>
                    <h3>Go-fullstack</h3>
                    {/* <p>Successfully implemented the a backend interface,<br/> or console, to manage program data. </p> */}
                    <a href="https://github.com/BenAwuor2/go-fullstack" className="viewCodeBtn">View Code <FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a>
                </div>

                <div className="portfolio-profile">
                    <Link className="LiveDemo" placeholder="Live Demo"><img src={fullmotion} alt="AppImg" className="AppImg"/></Link>
                    <h3>fullmotion</h3>
                    {/* <p>Successfully implemented the a backend interface,<br/> or console, to manage program data. </p> */}
                    <a href="https://github.com/BenAwuor2/Coding_projects/tree/main/fullmotion" className="viewCodeBtn">View Code <FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a>
                </div>

                <div className="portfolio-profile">
                    <Link className="LiveDemo" placeholder="Live Demo"><img src={portfolio} alt="AppImg" className="AppImg"/></Link>
                    <h3>Portfolio</h3>
                    {/* <p>Successfully implemented the a backend interface,<br/> or console, to manage program data. </p> */}
                    <a href="https://github.com/BenAwuor2/BenAwuor2.github.io" className="viewCodeBtn">View Code <FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a>
                </div>
                                
            </div>
            <button className="workbtn">See More</button>
        </section>
    )
}
export default Works;