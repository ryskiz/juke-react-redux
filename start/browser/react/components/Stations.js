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
                  DUMMY_STATIONS_DATA.map(station => {
                      return (
                          <div className="list-group-item" key={station.name}>
                              <Link to={'fill/me/in/later'}>{station.name}</Link>
                          </div>
                      );
                  })
              }
          </div>
      </div>
  );
}

export default Stations
