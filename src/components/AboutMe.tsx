import React from 'react';
import './AboutMe.css';


const AboutMe: React.FC = () => {

  return (
    <div className="about-me">
      <header>
        <h1>About Me</h1>
      </header>
      <img src='https://media.licdn.com/dms/image/D5603AQFa2Rp8lpgeTg/profile-displayphoto-shrink_800_800/0/1682214623680?e=1728518400&v=beta&t=4BlbUMFU7SeBILEBGXM41VWt0REi7ZgI3ApvKoc_C7A' height={300}></img>
      
      <section className="bio">
        <h2>Bio</h2>
        <p>
          Hello! I'm Berk Reasor, I grew up in Carmel, Indianapolis and got the values of
          technology instilled in me at a young age in Carmel High School. It was there I learned skills like Problem Solving, Cooperation, Analysis, Diligence, and more. Later at Miami University 
          I developed tech skills like web development, software engineering, database design and implementation, data analysis, and optimization. I joined the Game Design club at Miami to become aquainted
          with developing tangible projects and to apply my knowledge of the development cycle.
        </p>
      </section>

      <section className="contact">
        <h2>Contact</h2>
        <p>Email: breasor3@gmail.com</p>
        <p>LinkedIn: linkedin.com/in/yourprofile</p>
      </section>
    </div>
  );
};

export default AboutMe;

export {}