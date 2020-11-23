import { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import {Link, NavLink} from 'react-router-dom';
function Trailer(props) {
  const [movie, setMovie] = useState('');

  useEffect(() => {
    setMovie(
      props.listMovies.filter((el) => el.title === props.match.params.name)[0]
    );
  });
  return (
    <div className="trailer">
      {movie && (
        <div>
          <h1>{movie.title}</h1>
        </div>
      )}

      <p>
      <b>Description: </b> <p>{movie.description}</p>
      </p>
      <div><ReactPlayer  url={movie.Tlink}/>  </div>
   <div className='cc'>
      <NavLink activeClassName="navLink" to='/' >Home</NavLink>
      {/* <p click={()=>props.history.goBack()}></p> */}
      </div>
      </div> 
  );
}

export default Trailer;
