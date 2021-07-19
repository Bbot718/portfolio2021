import React, {useEffect} from 'react';

import Hero from './hero/hero';
import Journey from '../about/journey/journey';
import Skills from './skills/skills';
import Exhibition from './exhibiton/exhibition';
import Contact from '../home/contact/contact';

import AboutIn  from '../../animations/about-in';

const About = (props) => {
  
  useEffect(() => {   
    AboutIn();
  }, [])

  return(
    <div className="about">
      <div className="about__hero">
        <Hero />
      </div>
      <div className="about__info">
        <div className="container">
          <div className="row">
            <div className="col-3-of-4--no-margin"><Journey /></div>
          </div>
          <div className="spacing-regular" />
          <div className="row">
            <div className="col-2-of-4--no-margin"><Skills /></div>
          </div>
          <div className="spacing-regular" />
          <div className="row">
            <div className="col-2-of-4--no-margin"><Exhibition /></div>
          </div>
          <div className="spacing-large" />
          <div className="row">
            <div className="col-2-of-3--no-margin"><Contact /></div>
          </div>
        </div>
      </div>
     
    </div>
  )
}

export default About;
