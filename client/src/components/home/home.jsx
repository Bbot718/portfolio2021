import React, {useEffect} from 'react';

import Header from './header/header';
import Work from './work/work';
import About from './about/about';
import Contact from './contact/contact';

import ScrolltriggerHome from '../../animations/home-scrolltrigger'

const Home = (props) => {

  useEffect(() => {
    ScrolltriggerHome();
  }, []);

  return (
    <div className="home">
      <Header/>
      <Work/>  
      <div className="spacing-large"/>
      <Contact />
    </div>
  );
}

export default Home;
