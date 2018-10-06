import React, { Component } from 'react';
import './About.css'

class About extends Component {

    render() {
    return (
      <div className="About">
        <h1>About</h1>
        <h3>Developer, Consultant, Ninja</h3>
        <br></br>
        <br></br>
        <p className='text-left'>Consultant during the day, I transform into a software developer at night. I am a fast learner and passionate problem-solver.</p>
        <br></br>
        <ul className='text-left'>
        <li ><span className="li">The Developer life:</span>
            <p>
              Long-time tech enthusiat, I decided to scale-up a hobby to a skill. I am a full-stack web-developer.
              I graduated from the <a href='https://flatironschool.com/'>Flatironschool</a>.
              I currently focus on exploring React as a front-end framework. I worked with Ruby on Rails, C++, Java, SQL. 
              As I learn, I write about it in my blog and try to keep a learning path through daily katas that I publish on twitter.
              <span className='whisper'>
                (Follow me <a href='https://twitter.com/bechev' target="_blank">here</a>). And say hi!
              </span> 
            </p>
          </li>
          <br></br>
          <li><span className="li">The Consulting life:</span>
            <p>
              Specialized in the financial industry, I have been working as a management consultant for ~7 years. I am solving strategic and organizational problems for my clients executing both data-driven and qualitative analysis.
              I am leveraging those years of problem solvings to propose tailor-made and easy to execute solutions.
            </p>
          </li>
        </ul>
        <br></br>
        <br></br>
        <p className='text-left'>Outside of work, my wife would say that I spend too much time on video games, but I also love traveling and eating freshly baked croissants from my hone country. FRANCE!</p>
      </div>
    );
  }
}

export default About;
