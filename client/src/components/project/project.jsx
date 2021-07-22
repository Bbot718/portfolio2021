import React, {useEffect, useState, useRef} from 'react';
import Axios from 'axios';
import { useHistory } from "react-router-dom";


import Title from './title/title';
import Media from './media/media';

import Contact from '../home/contact/contact';

const Project = (props) => {  

  const [projects, setProjects] = useState([]);
  const [tags, setTags] = useState([]);
  const [media, setMedia] = useState([]);
  const [exhibitions, setExhibitions] = useState([]);
  const [locations, setLocations] = useState([]);
  
  useEffect(() => {   
    console.log()


    Axios
      .get('http://localhost:3001/api/projects')
      .then(res => { setProjects(res.data.filter(element => element.projects_id === props.location.state.id)) })
      .catch(e => console.log(e));

    Axios
      .get('http://localhost:3001/api/tags')
      .then(res => { setTags(res.data) })
      .catch(e => console.log(e));  
      
    Axios
      .get('http://localhost:3001/api/exhibitions')
      .then(res => { setExhibitions(res.data) })
      .catch(e => console.log(e));  

    Axios
      .get('http://localhost:3001/api/locations')
      .then(res => { setLocations(res.data) })
      .catch(e => console.log(e));  
  }, [])

  return(
    <div className="project">
      {projects.map((project, i) => {
        return(
          <React.Fragment>
            <Title name={project.name} tags={tags.filter(element => element.projects_id === props.location.state.id)} />
          </React.Fragment>
        )
      })

      }
      
      <div className="spacing-large" />
      <Contact />
    </div>

  )
} 

export default Project;