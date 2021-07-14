import React, {useEffect, useState, useRef} from 'react';

const Navigation = (props) => {
  const [isToggle, setIsToggled] = useState(false);
  const hamburger = useRef();
  const labels = useRef();

  const HandleClick = () => {
    setIsToggled(!isToggle);

    hamburger.current.classList.toggle('open');
    labels.current.classList.toggle('navigation-button__text--closed');
    labels.current.classList.toggle('navigation-button___text--opened');

  }



  return(
    <div className="navigation">

      <div className="navigation__header">

        <div className="navigation__title">
          <div className="wrapper"><div className="small-text">BENJAMIN BOTROS</div></div>
          <div className="wrapper no-mobile"><div className="small-text">Digital Designer</div></div>
        </div>

        <div className="navigation__button">
            <div  onClick={() => HandleClick()} className="navigation-button">  
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
        <li className="small-text">Selected Work</li>
        <li className="small-text">About</li>
        <li className="small-text">Contact</li>
      </ul>

      <div className="navigation__info no-mobile">
        <div className="wrapper"><div className="small-text">Scroll</div></div>
      </div>
    </div>

  )
}

export default Navigation;