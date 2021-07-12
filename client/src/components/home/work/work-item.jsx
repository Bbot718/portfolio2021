import React from 'react';


const WorkItem = (props) => {



  return(
    <React.Fragment>
      <article className="work-item">
        <div className="container">
          <div className="row">
            <div className="col-1-of-2--no-margin">
              <div className="work-item__image">
                <div className="work-item__image--hidder" />
                <img  className="work-item__image--media" 
                      alt="" 
                      src={require('../../../assets/images/thumbnails/' + props.data.thumbnail).default} 
                />
              </div>
            </div>
            <div className="col-1-of-2--no-margin">
              
              <div className="work-item__info">
                <div className="work-item__tags">
                  {props.tags.map((tag, i) => {
                    return(<div className="wrapper"><div className="work-item__tag small-text">{tag.name}</div></div>)
                  })}
                </div>
                
                <div className="work-item__title">
                  <div className="wrapper"><div className="small-text">{props.data.date}</div></div>
                  <div className="wrapper"><h2 className="secondary-heading">{props.data.name}</h2></div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </article>
      <hr className="line-regular" />
    </React.Fragment>
  )
}

export default WorkItem;