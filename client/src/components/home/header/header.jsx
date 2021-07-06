import React, {useEffect} from 'react';

const Header = (props) => {


  return(
    <section className="header">
      <div className="header__content">
        <div className="tertiary-heading header__heading">Hello Friend,</div>
        <hr className="header__line line-large" />
        <div className="tertiary-heading header__heading">I'm Ben, a Passionate</div>
        <hr className="header__line line-large" />
        <div className="tertiary-heading tertiary-heading--bold header__heading header__heading--offset">Digital</div>
        <hr className="header__line line-large" />
        <div className="tertiary-heading tertiary-heading--bold header__heading header__heading--offset">Designer</div>
        <hr className="header__line line-large" />
        <div className="tertiary-heading header__heading">Based In Lausanne</div>
        <hr className="header__line line-large" />
        <div className="tertiary-heading header__heading">Switzerland</div>
      </div>
    </section>
  )
}

export default Header;