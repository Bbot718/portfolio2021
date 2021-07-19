
const Skills = (props) => {

  return(
    <div className="skills">
     
    
      <div className="container">
        <div className="row">
          <div className="col-1-of-2--no-margin">
            <div className="small-text">Software Skills</div>
            <div className="spacing-small" />
            <div className="skills__title regular-text">UX / Prototyping</div>
            <ul className="skills__list">
              <li className="skills__item regular-text">Sketch</li>
              <li className="skills__item regular-text">Invision Studio</li>
              <li className="skills__item regular-text">Adobe XD</li>
            </ul>
            <div className="spacing-small" />
            <div className="skills__title regular-text">Creative Suite</div>
            <ul className="skills__list">
              <li className="skills__item regular-text">Photoshop</li>
              <li className="skills__item regular-text">Illustrator</li>
              <li className="skills__item regular-text">InDesign</li>
            </ul>
            <div className="spacing-small" />
            <div className="skills__title regular-text">Game Engines</div>
            <ul className="skills__list">
              <li className="skills__item regular-text">Unity</li>
              <li className="skills__item regular-text">Unreal Engine</li>
            </ul>

            <div className="spacing-small" />
            <div className="skills__title regular-text">Motion / 3D GFX</div>
            <ul className="skills__list">
              <li className="skills__item regular-text">After Effects</li>
              <li className="skills__item regular-text">Cinema 4D</li>
              <li className="skills__item regular-text">Blender</li>
            </ul>
          </div>

          <div className="col-1-of-2--no-margin">
            <div className="small-text">Coding Skills</div>
            <div className="spacing-small" />
            <div className="skills__title regular-text">Web Development</div>
            <ul className="skills__list">
              <li className="skills__item regular-text">React</li>
              <li className="skills__item regular-text">Javascript</li>
              <li className="skills__item regular-text">(PHP)</li>
              <li className="skills__item regular-text">MySQL</li>
              <li className="skills__item regular-text">HTML</li> 
              <li className="skills__item regular-text">SASS</li> 
            </ul>
            <div className="spacing-small" />
            <div className="skills__title regular-text">Creative Coding</div>
            <ul className="skills__list">
              <li className="skills__item regular-text">OpenFrameworks</li>
              <li className="skills__item regular-text">Processing</li>
              <li className="skills__item regular-text">ThreeJs</li>
            </ul>
            <div className="spacing-small" />
            <div className="skills__title regular-text">Gameplay Development</div>
            <ul className="skills__list">
              <li className="skills__item regular-text">Unity C#</li>
              <li className="skills__item regular-text">Unreal Blueprint</li>
            </ul>   
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Skills;
