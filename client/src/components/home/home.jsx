import React, {useEffect, useRef} from 'react';

import Header from './header/header';
import Work from './work/work';
import About from './about/about';
import Contact from './contact/contact';

import ScrolltriggerHome from '../../animations/home-scrolltrigger'
import HomeOut from '../../animations/home-out';
import { useHistory } from "react-router-dom";

const Home = (props) => {
  const history = useHistory();
  const workSection = useRef();

  useEffect(() => {
    ScrolltriggerHome();
  }, []);

  const handleClick = () => {
    const homeOut = HomeOut();
    setTimeout(() => {
      history.push("/about/");
      window.scrollTo(0,0);
    }, homeOut);
  }


  return (
    <div className="home">
      <Header/>
      <Work />  
      <div className="home__link">
        <div className="spacing-large"/>
        <p className="quartary-heading">Wanna know more about <div onClick={() => {handleClick()}} className="quartary-heading--link">me</div>,  journey and my.</p>
        <div className="spacing-medium"/>
      </div>
      <Contact />
    </div>
  );
}

export default Home;
