import React from "react";
import "./skills.css";
import mongodb from "../../assets/logo-mongodb.webp";
import node from "../../assets/nodejs-logo.png";
import react from "../../assets/React_logo.png";

const Skills = () => {
    return (
        <section id="skills">
            <span className="skillTittle"> What I do</span>
            <span className="skillDesc"> I turn ideas into reality by leveraging this technologies listed below to develop fully responsive and interractive websites</span>
            <div className="skillBars">
                <div className="skillBar">
                    <img src={react} alt='react' className="skillBarImg"/>
                    <div className="skillBarText">
                        <h2> React </h2>
                        <p>My detailed explanation</p>
                    </div>
                </div>
                <div className="skillBar">
                <img src={mongodb} alt='mongo' className="skillBarImg"/>
                    <div className="skillBarText">
                        <h2> MongoDB</h2>
                        <p>My detailed explanation</p>
                    </div>
                </div>
                <div className="skillBar">
                <img src={node} alt='node' className="skillBarImg"/>
                    <div className="skillBarText">
                        <h2> Express.js & Node.js  </h2>
                        <p>My detailed explanation</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Skills;