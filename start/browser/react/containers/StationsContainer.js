import {connect} from 'react-redux';
import Stations from '../components/Stations';



const convertSongsToStations = function(songs){
    const stations = {};
    songs.forEach(song => {
        const genre = song.genre;
        stations[genre] = stations[genre] || [];
        stations[genre].push(song);
    })
    return stations;
};

let mapStateToProps = (state, ownProps) => ({
    stations: convertSongsToStations(state.songs)
});

let mapDispatchToProps = (dispatch, ownProps) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Stations);