import React, {useEffect} from 'react';

import HeaderIn from '../../../animations/header-in';

const Header = (props) => {

  useEffect(() => {
    HeaderIn();
  }, []);


  return(
    <section className="header">
      <div className="spacing-large  no-desktop" />
      <div className="header__content">
        <div className="wrapper"><div className="tertiary-heading tertiary-heading--uppercase header__heading">Hello Friend,</div></div>
        <hr className="header__line line-large" />
        <div className="wrapper"><div className="tertiary-heading tertiary-heading--uppercase header__heading">I'm Ben, a Passionate</div></div>
        <hr className="header__line line-large" />
        <div className="wrapper"><div className="tertiary-heading tertiary-heading--uppercase tertiary-heading--bold header__heading header__heading--offset">Digital <div className="no-desktop">Designer</div> </div></div>
        <hr className="header__line line-large" />
        <div className="wrapper"><div className="tertiary-heading tertiary-heading--uppercase tertiary-heading--bold header__heading header__heading--offset no-mobile">Designer</div></div>
        <hr className="header__line line-large" />
        <div className="wrapper"><div className="tertiary-heading tertiary-heading--uppercase header__heading">Based In Lausanne</div></div>
        <hr className="header__line line-large" />
        <div className="wrapper"><div className="tertiary-heading tertiary-heading--uppercase header__heading">Switzerland</div></div>
      </div>
      <div className="spacing-xl no-desktop" />
    </section>
  )
}

export default Header;