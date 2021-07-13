
import Journey from '../about/journey/journey';
import Skills from './skills/skills';
import Exhibition from './exhibiton/exhibition';
import Contact from '../home/contact/contact';

const About = (props) => {

  return(
    <div className="about">
      <div className="container">
        <div className="row">
          <div className="col-2-of-3--no-margin"><Journey /></div>
        </div>
        <div className="spacing-large" />
        <div className="row">
          <div className="col-2-of-3--no-margin"><Skills /></div>
        </div>
        <div className="spacing-large" />
        <div className="row">
          <div className="col-2-of-3--no-margin"><Exhibition /></div>
        </div>
        <div className="spacing-large" />
        <div className="row">
          <div className="col-2-of-3--no-margin"><Contact /></div>
        </div>
      </div>
    </div>
  )
}

export default About;
