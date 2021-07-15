import React, {useEffect, useState, useRef} from 'react';
import Axios from 'axios';
import SplitText from 'gsap/dist/SplitText';

import WorkItem from './work-item';
import WorkIn from '../../../animations/work-in';


const Work = (props) => {
  const title = useRef();
  const line = useRef();

  const [projects, setProjects] = useState([]);
  const [tags, setTags] = useState([]);

  useEffect(() => {   
    WorkIn(title.current, line.current);
    
    Axios
      .get('http://localhost:3001/api/projects')
      .then(res => { setProjects(res.data) })
      .catch(e => console.log(e));

      Axios
      .get('http://localhost:3001/api/tags')
      .then(res => { setTags(res.data) })
      .catch(e => console.log(e));
  
  }, [])

  return(
    <section className="work">
      <div ref={title} className="wrapper"><div className="work__title primary-heading">work</div></div>
      <hr ref={line} className="work__line line-xl" />
      {projects.map((project, i) => {
        return(<WorkItem key={i} data={projects[i]} tags={tags.filter(element => element.projects_id === projects[i].projects_id)} />)
      })}
    </section>
  )
}

export default Work;