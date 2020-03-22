import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

let countPageNext;

export default function MainPage(props) {
    if (isNaN(countPageNext)) { countPageNext = 6 }

    let Previous = (item) => {
        if (item > 0) {
            countPageNext -= 5;
            props.PassFunction(item)
        };
    };

    let sendNewPageNum = (item) => {
        props.PassFunction(item);
        if (item % 5 !== 0) { countPageNext = item - (item % 5) + 6 };
        console.log(countPageNext);
    };

    return (
        <div>
            <button onClick={() => Previous(countPageNext - 6)} className="btn btn-outline-light ml-1">Previous</button>
            <button className="btn btn-outline-light ml-1" onClick={() => sendNewPageNum(countPageNext - 5)}>{countPageNext - 5}</button>
            <button onClick={() => sendNewPageNum(countPageNext - 4)} className="btn btn-outline-light ml-1">{countPageNext - 4}</button>
            <button onClick={() => sendNewPageNum(countPageNext - 3)} className="btn btn-outline-light ml-1">{countPageNext - 3}</button>
            <button onClick={() => sendNewPageNum(countPageNext - 2)} className="btn btn-outline-light ml-1">{countPageNext - 2}</button>
            <button onClick={() => sendNewPageNum(countPageNext - 1)} className="btn btn-outline-light ml-1">{countPageNext - 1}</button>
            <button onClick={() => sendNewPageNum(countPageNext)} className="btn btn-outline-light ml-1">Next</button>
        </div>
    )
}