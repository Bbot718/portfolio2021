import React, {useEffect, useState, useRef} from 'react';
import Footer from '../../footer/footer';

const Contact = (props) => {

  return(
    <div className="contact">
      <div className="container">
        <div className="row">
          <div className="col-1-of-1--no-margin"><div className="primary-heading">Say Hi!</div></div>
        </div>
        <div className="row">
          <div className="col-2-of-3--no-margin">
            <p className="regular-text">

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dignissim leo dictum tempus consectetur.</p>
          </div>
        </div>
        <div className="spacing-large" />
        <div className="row">
          <div className="col-1-of-1--no-margin"><div className="quartary-heading"><a href="">hello@benjaminbotros.ch</a></div></div>
        </div>

        <div className="spacing-large" />
        <div className="row">
          <div className="col-1-of-1--no-margin">
            <Footer />
          </div>
        </div>
      </div>
      
      
    </div>
  )
}

export default Contact;