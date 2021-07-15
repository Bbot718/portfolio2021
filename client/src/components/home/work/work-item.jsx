import React, { useEffect, useRef } from 'react';

import WorkItemIn from '../../../animations/work-item-in';
import WorkItemHover from '../../../animations/work-item-hover';
import HomeOut from '../../../animations/home-out';

import { useHistory } from "react-router-dom";

const WorkItem = (props) => {
  const image = useRef();
  const media = useRef();
  const tags = useRef([]);
  const name = useRef();
  const date = useRef();
  const line = useRef();
  

  const history = useHistory();

  useEffect(() => {    
    WorkItemIn(image.current, tags.current, name.current, date.current, line.current);
  }, [])

 

  const handleClick = () => {
    const homeOut = HomeOut();
    setTimeout(() => {
      history.push("/about/");
      window.scrollTo(0,0);
    }, homeOut);
  }

  return(
    <React.Fragment>
      <article  onClick={() => {handleClick()}} 
                onMouseOver={() => {WorkItemHover(true, name.current, media.current)}}
                onMouseOut={() => {WorkItemHover(false, name.current, media.current)}}
                className="work-item">
        <div className="container">
          <div className="row"> 
            <div className="col-1-of-2--no-margin">
              <div className="work-item__image">
                <div ref={image} className="work-item__image--hidder" />
                <img ref={media} className="work-item__image--media" 
                      
                      alt="" 
                      src={require('../../../assets/images/thumbnails/' + props.data.thumbnail).default} 
                />
              </div>
            </div>
            <div className="col-1-of-2--no-margin">
              
              <div className="work-item__info">
                  <div  className="work-item__tags">
                    {props.tags.map((tag, i) => {
                      return(<div className="wrapper"><div key={i} ref={(element) => tags.current.push(element)} className="work-item__tag regular-text">{tag.name}</div></div>)
                    })}
                  </div>
                
                <div  className="work-item__title">
                  <div className="wrapper"><div ref={date} className="work-item__date regular-text">{props.data.date}</div></div>
                  <div  className="wrapper"><h2 ref={name} className="work-item__name secondary-heading">{props.data.name}</h2></div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </article>
      <hr ref={line} className="work__line line-regular" />
    </React.Fragment>
  )
}

export default WorkItem;