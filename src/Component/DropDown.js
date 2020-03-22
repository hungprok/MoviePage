import React from 'react'

export default function DropDown(props) {
let sendSortType =(item) =>{
    props.sortType(item);
};
    return (
        <div className="dropdown m-0 mt-1">
            <button
                className="btn btn-outline-light dropdown-toggle"
                type="button"
                id="dropdownMenu2"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false">
                Sort By</button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                <button onClick={() => sendSortType("popularity")} className="dropdown-item" type="button">
                    Popularity
    </button>
                <button onClick={() => sendSortType("release_date")} className="dropdown-item" type="button">
                    Release date
    </button>
                <button onClick={() => sendSortType("revenue")} className="dropdown-item" type="button">
                    Revenue
    </button>
                <button onClick={() => sendSortType("vote_average")} className="dropdown-item" type="button">
                    Vote
    </button>
            </div>
        </div>
    )
}
