import React, {useEffect, useState, useRef} from 'react';
import ReactRotatingText from "react-rotating-text";

import Footer from '../../footer/footer';

const Contact = (props) => {
  

  return(
    <div className="contact">

        <div className="small-text">Contact me to</div>
        <ReactRotatingText  className="small-text"
                            items={[
                              " say hello! ",
                              " have a coffee! ",
                              " colaborate! ",]}
        />

        <div className="contact__link quartary-heading"><a href="">hello@benjaminbotros.ch</a></div>
        <div className="contact__link quartary-heading"><a href="">LinkedIn</a></div>

        

      <div className="spacing-large"/>
      <Footer />
    </div>
  )
}

export default Contact;
