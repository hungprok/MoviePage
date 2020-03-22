import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Render() {
    let [movieInfo, setmovieInfo] = useState(null);

    let fetchMovieInfo = async () => {
        const api = "5c4d91615c827590b1f7965784c32a2c";
        let url = `https://api.themoviedb.org/3/trending/all/day?api_key=${api}`;
        let data = await fetch(url);
        let result = await data.json();

        console.log(result);
        setmovieInfo(result);
    }
    useEffect(fetchMovieInfo, []);

    if (!movieInfo) {
        return <div>Loading</div>
    };

    return (
        <div className="row">
              <div
                id="carouselExampleCaptions"
                className="carousel slide m-1"
                data-ride="carousel"
              >
                <ol className="carousel-indicators">
                  <li
                    data-target="#carouselExampleCaptions"
                    data-slide-to={0}
                    className="active"
                  />
                  <li data-target="#carouselExampleCaptions" data-slide-to={1} />
                  <li data-target="#carouselExampleCaptions" data-slide-to={2} />
                  <li data-target="#carouselExampleCaptions" data-slide-to={3} />
                  <li data-target="#carouselExampleCaptions" data-slide-to={4} />
                </ol>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                  <a href={`https://www.themoviedb.org/movie/${movieInfo.results[0].id}?language=en-US`}>
                    <img
                      src={`https://image.tmdb.org/t/p/original/${movieInfo.results[0].backdrop_path}`}
                      className="d-block w-100"
                      alt="..."/></a>
                    <div className="carousel-caption d-none d-md-block" style={{ backgroundImage: "linear-gradient(-90deg, #00000000, #00000090, #00000090, #00000000 )" }}>
                      <h1>{movieInfo.results[0].title}</h1>
                      <p>{movieInfo.results[0].overview}</p>
                    </div>
                  </div>
                  <div className="carousel-item">
                  <a href={`https://www.themoviedb.org/movie/${movieInfo.results[1].id}?language=en-US`}>
                    <img
                      src={`https://image.tmdb.org/t/p/original/${movieInfo.results[1].backdrop_path}`}
                      className="d-block w-100"
                      alt="..."
                    /></a>
                    <div className="carousel-caption d-none d-md-block" style={{ backgroundImage: "linear-gradient(-90deg, #00000000, #00000090, #00000090, #00000000 )" }}>
                    <h1>{movieInfo.results[1].title}</h1>
                      <p>{movieInfo.results[1].overview}</p>
                    </div>
                  </div>
                  <div className="carousel-item">
                  <a href={`https://www.themoviedb.org/movie/${movieInfo.results[2].id}?language=en-US`}>
                    <img
                      src={`https://image.tmdb.org/t/p/original/${movieInfo.results[2].backdrop_path}`}
                      className="d-block w-100"
                      alt="..."
                      /></a>
                      <div className="carousel-caption d-none d-md-block" style={{ backgroundImage: "linear-gradient(-90deg, #00000000, #00000090, #00000090, #00000000 )" }}>
                    <h1>{movieInfo.results[2].title}</h1>
                      <p>{movieInfo.results[2].overview}</p>
                    </div>
                  </div>
                  <div className="carousel-item">
                  <a href={`https://www.themoviedb.org/movie/${movieInfo.results[3].id}?language=en-US`}>
                    <img
                      src={`https://image.tmdb.org/t/p/original/${movieInfo.results[3].backdrop_path}`}
                      className="d-block w-100"
                      alt="..."
                      /></a>
                    <div className="carousel-caption d-none d-md-block" style={{ backgroundImage: "linear-gradient(-90deg, #00000000, #00000090, #00000090, #00000000 )" }}>
                    <h1>{movieInfo.results[3].title}</h1>
                      <p>{movieInfo.results[3].overview}</p>
                    </div>
                  </div>
                  <div className="carousel-item">
                  <a href={`https://www.themoviedb.org/movie/${movieInfo.results[4].id}?language=en-US`}>
                    <img
                      src={`https://image.tmdb.org/t/p/original/${movieInfo.results[4].backdrop_path}`}
                      className="d-block w-100"
                      alt="..."
                      /></a>
                    <div className="carousel-caption d-none d-md-block" style={{ backgroundImage: "linear-gradient(-90deg, #00000000, #00000090, #00000090, #00000000 )" }}>
                    <h1>{movieInfo.results[4].title}</h1>
                      <p>{movieInfo.results[4].overview}</p>
                    </div>
                  </div>
                </div>
                <a
                  className="carousel-control-prev"
                  href="#carouselExampleCaptions"
                  role="button"
                  data-slide="prev"
                >
                  <span className="carousel-control-prev-icon" aria-hidden="true" />
                  <span className="sr-only">Previous</span>
                </a>
                <a
                  className="carousel-control-next"
                  href="#carouselExampleCaptions"
                  role="button"
                  data-slide="next"
                >
                  <span className="carousel-control-next-icon" aria-hidden="true" />
                  <span className="sr-only">Next</span>
                </a>
              </div>
            </div>
    );
}

export default Render;