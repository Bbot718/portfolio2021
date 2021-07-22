import React, {useEffect, useState, useRef} from 'react';

const Title = (props) => {

  return(
    <div className="title">
      {props.tags.map((tag, i) => {return(tag.name)})}
      <br />
      {props.name}
    </div>

  )
}

export default Title;