import React, {useEffect, useState, useRef} from 'react';

import { useHistory } from "react-router-dom";

import HomeOut from '../../animations/home-out';
import AboutOut from '../../animations/about-out';

const Navigation = (props) => {
  const [isToggle, setIsToggled] = useState(false);
  const hamburger = useRef();
  const labels = useRef();

  const history = useHistory();

  const HandleHamburgerClick = () => {
    setIsToggled(!isToggle);

    hamburger.current.classList.toggle('open');
    labels.current.classList.toggle('navigation-button__text--closed');
    labels.current.classList.toggle('navigation-button___text--opened');

  }

  const HandleMenuClick = (menuItem) => {
    const currentPage = window.location.href.split('/')[3];

    if(menuItem === 1){
      if(currentPage === 'home' || currentPage === ''){
        console.log('hi');
      }
      else{
        const out = AboutOut();
        setTimeout(() => {
          history.push("/#work");
        }, out);

      }
    }
    else if(menuItem === 2){
      if(currentPage === 'about'){
        window.scrollTo(0,0);
      }
      else{
        const out = HomeOut();
        setTimeout(() => {
          history.push("/about/");
          window.scrollTo(0,0);
        }, out);
      }
    }
  }



  return(
    <div className="navigation">

      <div className="navigation__header">

        <div className="navigation__title">
          <div className="wrapper"><div className="navigation__title navigation__in regular-text">Benjamin Botros</div></div>
          <div className="wrapper no-mobile"><div className="navigation__title navigation__in regular-text">Digital Designer</div></div>
        </div>

        <div className="navigation__button">
            <div  onClick={() => HandleHamburgerClick()} className="navigation-button">  
          <div className="navigation-button__label ">
            <div className="wrapper">
              <div ref={labels} className="navigation-button__text navigation-button__text--opened">
                <div className="regular-text">MENU</div>
                <div className="regular-text">CLOSE</div>
              </div>      
            </div>
          </div>

          <div ref={hamburger} className="navigation-button__hamburger">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        </div>
      </div>
     

      <ul className="navigation__menu">
        <div className="wrapper"><li onClick={() => HandleMenuClick(1)} className="navigation__in navigation__button regular-text">Selected Work</li></div>
        <div className="spacing-small" />
        <div className="wrapper"><li onClick={() => HandleMenuClick(2)} className="navigation__in navigation__button regular-text">About</li></div>
        <div className="spacing-small" />
        <div className="wrapper"><li className="navigation__in navigation__button regular-text"><a href="mailto:hello@benjaminbotros.ch?subject=Contact from site">Contact</a></li></div>
        
      </ul>

      <div className="navigation__info no-mobile">
        <div className="wrapper"><div className="navigation__in regular-text">Scroll</div></div>
      </div>
    </div>

  )
}

export default Navigation;