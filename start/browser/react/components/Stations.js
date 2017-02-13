import React from 'react';
import { Link } from 'react-router'
import StationsContainer from '../containers/StationsContainer';
const DUMMY_STATIONS_DATA = [
    { name: '90s Hip Hop' },
    { name: 'Death Metal' },
    { name: 'Classical' }
];

const Stations = (props) => {
  return (
      <div>
          <h3>Stations</h3>
          <div className="list-group">
              {
                  props.stations && Object.keys(props.stations).map((genre) => {
                      console.log(genre);
                      return (<div className="list-group-item" key={genre}>
                          <Link to={`/stations/${genre}`}>{genre}</Link>
                      </div>)
                  })
              }
          </div>
      </div>
  );
}

export default Stations
