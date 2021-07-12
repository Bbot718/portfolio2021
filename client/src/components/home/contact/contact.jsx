import React, {useEffect, useState, useRef} from 'react';
import ReactRotatingText from "react-rotating-text";

import Footer from '../../footer/footer';

const Contact = (props) => {

  return(
    <div className="contact">

        <div className="quartary-heading">Contact me to</div>
        <ReactRotatingText  className="quartary-heading"
                            items={[
                              " say hello! ",
                              " have a coffee! ",
                              " colaborate! ",]}
        />
        <div className="spacing-small"></div>
        <div className="quartary-heading"><a href="">hello@benjaminbotros.ch</a></div>
        <br/>
        <div className="quartary-heading"><a href="">LinkedIn</a></div>

        

      <div className="spacing-large"/>
      <Footer />
    </div>
  )
}

export default Contact;
