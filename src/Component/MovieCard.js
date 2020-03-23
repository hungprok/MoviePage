import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row } from 'react-bootstrap';

export default function MovieCard(props) {
    // console.log(props.MovieInformation);
    let htmlMovieCard = props.MovieInformation.map((item) => {
        // if (!item.id) {item.id="63247"};
        return (<div className="col-3 m-0 p-1 ">
            <div className="p-0 text-white" style={{ borderRadius: 10, }}>
                <a href={`https://www.themoviedb.org/movie/${item.id}?language=en-US`}><img style={{ borderRadiusTop: 10 }} className="card-img-top" src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${item.poster_path}`} alt="Card" /></a>
                <div className="card-body p-2" style={{backgroundImage: "linear-gradient(-90deg, #000000, #00000000 )", borderRadiusBottom: 50}}>
                    <h6 className="card-title m-0 mb-2 text-center" style={{
                        display: "block",
                        textOverflow: "ellipsis",
                        height: 20,
                        width: 190,
                        overflow: "hidden",
                        whiteSpace: "wrap"
                    }}>{item.title}</h6>
                    <div className="row">
                    <div className="col-5 m-0 p-0 pl-1">
<<<<<<< HEAD
                    <h6 className="text-left m-0 pl-1"><button onClick={()=> props.onhandleSetModal(item.id)}>PLAY</button></h6>
=======
                    <h6 onClick={() => props.handleOnModal(item.id)} style={{cursor: 'pointer'}} className="text-left m-0 pl-1"> <img style={{ height: 26 }} src="https://optimusdivi.com/wp-content/uploads/2018/07/Play-Icon-Logo-4.svg" alt=""/> PLAY</h6>
>>>>>>> 35cdd9983811d15fce4c6a0e39403a1259f8b426
                        </div>
                        <div className="col-7 ">
                        <h6 className="text-right m-0"><img style={{ height: 22 }} src="https://www.archiveteam.org/images/e/e6/Imdb_logo.png" alt="" /> {item.vote_average}</h6></div>
                    </div>
                </div>
            </div></div>)
    })
    return (
        <Row className="justify-content-between">
            {htmlMovieCard}
        </Row>
    )
}
