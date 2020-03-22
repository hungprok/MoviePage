import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function LatestMovie() {
    let [movieInfo, setmovieInfo] = useState(null);

    let fetchMovieInfo = async () => {
        // var tempDate = new Date();
        // var date = tempDate.getFullYear() + '-' + (tempDate.getMonth() + 1) + '-' + tempDate.getDate();
        // const currDate = date;
        const api = "5c4d91615c827590b1f7965784c32a2c";
        let url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${api}&language=en-US&include_adult=false&page=1`;
        let data = await fetch(url);
        let result = await data.json();

        // console.log(currDate);
        console.log(result);
        setmovieInfo(result);
    }
    useEffect(fetchMovieInfo, []);

    if (!movieInfo) {
        return <div>Loading</div>
    };

    let htmlLatestMovieCard = movieInfo.results.map((item) => {
        return (
            <div className="card mb-1 mt-1 text-white bg-transparent" style={{ maxWidth: 540 }}>
                <div className="row no-gutters ">
                    <div className="col-md-4 ">
                        <a href={`https://www.themoviedb.org/movie/${item.id}?language=en-US`}><img className="card-img-top " src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${item.poster_path}`} alt="Card" /></a>
                    </div>
                    <div className="col-md-8 " style={{backgroundImage: "linear-gradient(-90deg, #00000050, #24242450, #333333 )"}}>
                        <div className="card-body p-0 m-0 ml-3 pt-3 ">
                            <h6 style={{
                                display: "block",
                                textOverflow: "ellipsis",
                                height: 40,
                                width: 120,
                                overflow: "hidden",
                                whiteSpace: "wrap"
                            }}>{item.title}</h6>
                            <p>
                                <small><img style={{ height: 15 }} src="https://www.archiveteam.org/images/e/e6/Imdb_logo.png" alt="" /> {item.vote_average}</small>
                            </p>
                        </div>
                    </div>
                </div>
            </div>)
    })
    return (<div>
        {htmlLatestMovieCard}
    </div>
    )
}
