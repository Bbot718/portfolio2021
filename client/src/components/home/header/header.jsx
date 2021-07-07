import React, {useEffect} from 'react';

import gsap, {Expo} from 'gsap';
import SplitText from 'gsap/SplitText'

const Header = (props) => {

  useEffect(() => {
    const tl = gsap.timeline();
    
    const splitText = new SplitText(".header__heading", {type:"lines, words, chars"});
    const lines = splitText.lines;
    const words = splitText.words;
    const chars = splitText.chars;

    //gsap.from(words, {y: '100%', stagger: 0.05, ease: Expo.easeInOut, duration:1.5});
    gsap.from(chars, {rotateX: '200%', stagger: 0.05, ease: Expo.easeInOut, duration:1.5});

  }, []);


  return(
    <section className="header">
      <div className="header__content">
        <div className="wrapper"><div className="tertiary-heading header__heading">Hello Friend,</div></div>
        <hr className="header__line line-large" />
        <div className="wrapper"><div className="tertiary-heading header__heading">I'm Ben, a Passionate</div></div>
        <hr className="header__line line-large" />
        <div className="wrapper"><div className="tertiary-heading tertiary-heading--bold header__heading header__heading--offset">Digital</div></div>
        <hr className="header__line line-large" />
        <div className="wrapper"><div className="tertiary-heading tertiary-heading--bold header__heading header__heading--offset">Designer</div></div>
        <hr className="header__line line-large" />
        <div className="wrapper"><div className="tertiary-heading header__heading">Based In Lausanne</div></div>
        <hr className="header__line line-large" />
        <div className="wrapper"><div className="tertiary-heading header__heading">Switzerland</div></div>
      </div>
    </section>
  )
}

export default Header;