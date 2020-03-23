import React, { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MovieCard from "./Component/MovieCard";
import LatestMovie from "./Component/LatestMovie";
import Slider from "./Component/Slider";
import MainPage from "./Component/MainPage";
import DropDown from "./Component/DropDown";
import ReactModal from "react-modal";
import YouTube from "@u-wave/react-youtube";

let keyword = "";

function Render() {
  let [movieInfo, setmovieInfo] = useState(null);
  let [modal, setModal] = useState(false);
  // let [video, setVideo] = useState([]);
  let [key, setKey] = useState("");
  let mainPageNumber = 1;
  let sortType = "popularity";
  const api = "5c4d91615c827590b1f7965784c32a2c";

  let changePage = newPageNum => {
    mainPageNumber = newPageNum;
    fetchMovieInfo(mainPageNumber);
  };

  let changeSortType = type => {
    sortType = type;
    fetchMovieInfo(sortType);
  };

  let sortBy = "desc";
  let changeSortBy = type => {
    if (type) {
      sortBy = "asc";
    } else {
      sortBy = "desc";
    }
    fetchMovieInfo(sortBy);
  };

  // let search = (keyword) => {
  //   url =`https://api.themoviedb.org/3/search/movie?query=${keyword}?api_key=${api}&language=en-US`;
  //   fetchMovieInfo(url)
  // };
  let randomVideo = (trailer) => {
    let listRanVideo = Object.keys(trailer);
    let randomIndex = Math.floor(Math.random() * listRanVideo.length);
    let choiceIndex = listRanVideo[randomIndex];
    let choiceVideo = trailer[choiceIndex];
    console.log(choiceVideo)
    if (choiceVideo === null || !choiceVideo) {
      setKey("V-72ONxugLs");
    } else {
      setKey(choiceVideo.key);
    }
  };

  let getVideo = async (idvalue) => {
    let response = await fetch(
      `https://api.themoviedb.org/3/movie/${idvalue}/videos?api_key=${api}&language=en-US`
    );
    let responseJson = await response.json();
    let result = responseJson.results.filter(web => web.site === "YouTube");
    if (result || result !== []) {
      // setVideo(result);
      randomVideo(result);
      setModal(true);
    }
  };

  let fetchMovieInfo = async () => {
    let url = `https://api.themoviedb.org/3/discover/movie?api_key=${api}&language=en-US&sort_by=${sortType}.${sortBy}&page=${mainPageNumber}`;
    let data = await fetch(url);
    let result = await data.json();
    setmovieInfo(result);
  };

  useEffect(fetchMovieInfo, []);

  if (!movieInfo) {
    return <div>Loading</div>;
  }

  return (
    <div>
      <div style={{ backgroundColor: "#333333" }}>
        <nav
          className="navbar justify-content-between "
          style={{
            backgroundImage: "linear-gradient(#00000090,#333333)",
            height: 100
          }}
        >
          <ReactModal
          onRequestClose={() => setModal(false)}
            isOpen={modal}
            style={{
              overlay: { display: "flex", justifyContent: "center" },
              content: { width: "70%", height: "70%", position: "relative" }
            }}
          >
            <YouTube video={key} width='100%' height='100%' autoplay />
          </ReactModal>
          <div className="container p-0">
            <a className="navbar-brand" href="index.html">
              <img
                height="60px"
                src="https://upload.wikimedia.org/wikipedia/commons/6/6a/Cinemax_LA.png"
                alt=" "
              />
            </a>
            <form className="form-inline ">
              <input
                onChange={e => {
                  keyword = e.target.value;
                  console.log(keyword);
                }}
                className="form-control mr-sm-2 "
                type="search "
                placeholder="Type something "
                aria-label="Search "
              />
              <button
                className="btn btn-outline-light my-2 my-sm-0 "
                type="submit "
              >
                Search
              </button>
            </form>
          </div>
        </nav>
      </div>
      <div style={{ backgroundColor: "#333333" }}>
        <div className="container ">
          <div className="row ">
            <div className="col-md-9 p-0 ">
              <Slider />
              <div className="row">
                <div className="col-6 p-0 pl-1 d-flex">
                  <DropDown sortType={changeSortType} />
                  <button
                    onClick={() => changeSortBy(true)}
                    className="btn btn-outline-light m-1"
                    type="submit "
                  >
                    ↑
                  </button>
                  <button
                    onClick={() => changeSortBy(false)}
                    className="btn btn-outline-light mt-1 mb-1"
                    type="submit "
                  >
                    ↓
                  </button>
                </div>
                <div className="col-6">
                  <div class="row m-0 p-0 mt-1 mb-1 d-flex justify-content-end">
                    <MainPage PassFunction={changePage} />
                  </div>
                </div>
              </div>
              <div className="row m-0 p-0 justify-content-between ">
                <MovieCard
                  MovieInformation={movieInfo.results}
                  handleOnModal={getVideo}
                />
              </div>
              <div class="row m-0 p-0 mt-1 d-flex justify-content-end">
                <MainPage PassFunction={changePage} />
              </div>
            </div>
            <div className="col-md-3 p-0 pl-5">
              <h4 className="text-white text-center mt-0 mb-3">
                ALL TIME RANKING
              </h4>
              <LatestMovie />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Render;
