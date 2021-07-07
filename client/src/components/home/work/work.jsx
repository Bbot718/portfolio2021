import React, {useEffect, useState} from 'react';
import Axios from 'axios';

import WorkItem from './work-item';

const Work = (props) => {

  const [projects, setProjects] = useState([]);
  const [tags, setTags] = useState([]);

  useEffect(() => {
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
      <div className="wrapper"><div className="primary-heading">work</div></div>
      <hr className="line-xl" />
      {projects.map((project, i) => {
        return(<WorkItem key={i} data={projects[i]} tags={tags.filter(element => element.projects_id === projects[i].projects_id)} />)
      })}
    </section>
  )
}

export default Work;