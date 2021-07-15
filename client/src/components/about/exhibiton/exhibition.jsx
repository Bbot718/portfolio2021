
import React, {useState, useEffect} from 'react';
import Axios from 'axios';

const Exhibition = (props) => {
  const [exhibitions, setExhibitions] = useState([]);
  const [locations, setLocations] = useState([]);

  useEffect(() => {
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
    <div className="exhibition">
      <div className="container">
        <div className="row">
          <div className="col-1-of-1--no-margin">
            <div className="exhibition__name small-text">Exhibitions</div>
          </div>
        </div>
        {exhibitions.map((exhibition, i) => {
          return(
            <React.Fragment>
              <div className="row">
                <div className="col-1-of-2--no-margin ">
                  <div className="exhibition__name regular-text">
                    {exhibition.name + ', '}
                    {(exhibition.start_date === exhibition.end_date) ? exhibition.start_date : exhibition.start_date + " - " + exhibition.end_date}
                  </div>
                </div>
                <div className="col-1-of-2--no-margin">
                  <div className="exhibition__location">
                    {locations.filter(element => element.exhibition_location_id === i).map((location, j) => {
                    return(<div className="exhibition__location-element regular-text">
                      {location.city + ", " + location.country}</div>)
                    })}
                  </div>
                </div>

              </div>
              <hr className="line-hair" />
            </React.Fragment>
          )
        })}
      </div>
    </div>
  )
}

export default Exhibition;
