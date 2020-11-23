import React, { useState } from "react";
import "./App.css";
import { MovieList } from "./MovieList";
import { Search } from "./Search";
import Trailer from "./Trailer";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ReactPlayer from "react-player";

function App() {
  const [movies, setMovies] = useState([
    {
      main_img:
        "https://upload.wikimedia.org/wikipedia/en/thumb/a/ac/Saving_Private_Ryan_poster.jpg/220px-Saving_Private_Ryan_poster.jpg",
      second_img:
        "https://img.cinemablend.com/filter:scale/quill/c/b/9/6/2/a/cb962afc4814ed003a7af1337f318ddd6cf76218.jpg?mw=600",
      title: "Saving Private Ryan",
      duration: "136 min",
      date: "1998",
      rate: 4,
      genre: "Action, War",
      description:
        "Le film met en scène des soldats américains qui, dans la confusion du début de la bataille de Normandie, ont pour mission de retrouver un soldat dont les frères sont tous morts au combat.",
      Tlink:
        "https://www.youtube.com/watch?v=9CiW_DgxCnQ"
    },
    {
      main_img:
        "https://images-na.ssl-images-amazon.com/images/I/71t14nj8cKL._AC_SL1500_.jpg",
      second_img:
        "https://ds1.static.rtbf.be/article/image/370x208/5/d/a/65f46ceafe2638f993a275f03ded37eb-1401697921.jpg",
      title: "Inglorious Bastards",
      duration: "153 min",
      date: "2009",
      rate: 5,
      genre: "Action, War",
      description:
        "Des soldats juifs alliés menés par le lieutenant Aldo Raine (Brad Pitt), envoyés en Europe occupée pour éliminer le plus de nazis possible, qu'ils s'appliquent à scalper, avant de s'attaquer avec succès à leurs dirigeants.",
      Tlink:
        "https://www.youtube.com/watch?v=KnrRy6kSFF0",
    },
    {
      main_img:
        "https://images-na.ssl-images-amazon.com/images/I/71wvsHoHLFL._AC_SY550_.jpg",
      second_img:
        "https://wallpoper.com/images/00/42/19/80/fight-club_00421980.jpg",
      title: "Fight Club",
      duration: "151 min",
      date: "1999",
      rate: 1,
      genre: "Drama, Thriller",
      description:
        "Jack est un jeune expert en assurance insomniaque, désillusionné par sa vie personnelle et professionnelle. Lorsque son médecin lui conseille de suivre une thérapie afin de relativiser son mal-être, il rencontre dans un groupe d'entraide Marla avec qui il parvient à trouver un équilibre.",
      Tlink:
        "https://www.youtube.com/watch?v=qtRKdVHc-cE",
    },
    {
      main_img:
        "https://upload.wikimedia.org/wikipedia/en/d/dc/Into_the_Wild_%282007_film_poster%29.png",
      second_img:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe-oL-Ec4HlWtsT9VZpfGWk74ualAkUgrTuQ&usqp=CAU",
      title: "Into the wild",
      duration: "148 min",
      date: "2007",
      rate: 3,
      genre: "Drama, Thriller",
      description:
        "Christopher McCandless est un étudiant américain brillant qui vient d'obtenir son diplôme et qui est promis à un grand avenir. Rejetant les principes de la société moderne, après un dîner dans un restaurant avec ses parents, pour fêter son diplôme, il décide de partir sur les routes, sans prévenir sa famille.",
      Tlink:
        "https://www.youtube.com/watch?v=XZG1FzyB8DI",
    },
  ]);
  const [keyword, setKeyword] = useState("");
  const [newRate, setNewRate] = useState(1);

  const search = (text) => {
    setKeyword(text);
  };

  const setRate = (rate) => {
    setNewRate(rate);
  };

  const addMovie = (movie) => {
    setMovies(movies.concat(movie));
  };

  return (
    <Router>
      <div className="container">
        
        <Search search={search} setRate={setRate} newRate={newRate} />
        
        <MovieList
          addMovie={addMovie}
          movies={movies.filter(
            (movie) =>
              movie.rate >= newRate &&
              movie.title.toLowerCase().includes(keyword.toLowerCase().trim())
          )}/>

        <Route
          path="/trailer/:name"
          render={(props) => <Trailer {...props} listMovies={movies} />}
        />
      </div>
      {/* <Route path="/trailer" component={Trailer} /> */}
    </Router>
  );
}

export default App;
