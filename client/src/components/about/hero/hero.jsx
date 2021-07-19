

const Hero = (props) => {

  return(
    <div className="hero">
      <div className="hero__heading">
        <div className="wrapper"><div className="hero-heading header__heading">Hello Friend,</div></div>
        <div className="wrapper"><div className="hero-heading header__heading">Based In Lausanne</div></div>    
      </div>
      <div className="spacing-large" />
      <div className="hero__image">

        <div className="container">
          <div className="row">
            <div className="col-1-of-2--no-margin">
              <div className="hero__image">
                <div className="hero__hidder" />
                <img className="hero__media" src={require('../../../assets/images/about/test.jpg').default}  />    
              </div>
            </div>
            
            <div className="col-1-of-2--no-margin">
              <div className="hero__image">
                <div className="hero__hidder" />
                <img className="hero__media" src={require('../../../assets/images/about/test.jpg').default}  />    
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Hero;
