import React from 'react';
import { Link } from 'react-router-dom';

const Show = (props) => {
    const {name, id, image} = props.show;

    return (
        <div className="">
            <div className="h-4/5 w-60 mx-auto">
            {/* <img className="w-full h-full" src={image?.original} alt="" /> */}
            <h1>{name}</h1>
            <Link to={`/showDetails/${id}`} className="px-8 py-2 text-white font-semibold rounded text-base bg-blue-500 shadow-lg shadow-blue-500/50 ...">See Details</Link>
            </div>
        </div>
    );
};

export default Show;