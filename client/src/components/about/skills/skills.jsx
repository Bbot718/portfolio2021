
const Skills = (props) => {

  return(
    <div className="skills">
     
      <div className="small-text">Software</div>
      <div className="skills__row">

        <div className="skills__list">
          <div className="skills__item regular-text">UX / Prototyping</div>
          <ul>
            <li className="skills__subitem regular-text">Sketch</li>
            <li className="skills__subitem regular-text">InVision Studio</li>
          </ul>
        </div>

        <div className="skills__list">
          <div className="skills__item regular-text">Creative Suite</div>
          <ul>
            <li className="skills__subitem regular-text">Photoshop</li>
            <li className="skills__subitem regular-text">Illustrator</li>
            <li className="skills__subitem regular-text">Indesign</li>
          </ul>
        </div>

        <div className="skills__list">
          <div className="skills__item regular-text">3D / Motion</div>
          <ul>
            <li className="skills__subitem regular-text">Cinema4D</li>
            <li className="skills__subitem regular-text">Blender</li>
            <li className="skills__subitem regular-text">After Effects</li>
          </ul>
        </div>

        <div className="skills__list">
          <div className="skills__item regular-text">Game Engines</div>
          <ul>
            <li className="skills__subitem regular-text">Unity</li>
            <li className="skills__subitem regular-text">Unreal Engine</li>
          </ul>
        </div>

      </div>

      <div className="spacing-regular"></div>
      <div className="small-text">Coding</div>
      <div className="skills__row">

        <div className="skills__list">
          <div className="skills__item regular-text">Web Dev</div>
          <ul>
            <li className="skills__subitem regular-text">React</li>
            <li className="skills__subitem regular-text">Javascript</li>
            <li className="skills__subitem regular-text">SASS</li>
            <li className="skills__subitem regular-text">HTML</li>
          </ul>
        </div>


        <div className="skills__list">
          <div className="skills__item regular-text">Creative Coding</div>
          <ul>
            <li className="skills__subitem regular-text">OpenFrameworks</li>
            <li className="skills__subitem regular-text">Processing</li>
            <li className="skills__subitem regular-text">ThreeJs</li>
          </ul>
        </div>

        <div className="skills__list">
          <div className="skills__item regular-text">Gameplay Development</div>
          <ul>
            <li className="skills__subitem regular-text">Unity C♯</li>
            <li className="skills__subitem regular-text">Unreal Blueprint</li>
          </ul>
        </div>

      </div>
      <div className="spacing-small" />
      <p className="regular-text">I am comfortable using GIT.</p>
    </div>
  )
}

export default Skills;
