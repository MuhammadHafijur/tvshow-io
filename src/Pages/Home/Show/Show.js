import React from 'react';

const Show = (props) => {
    const {name, image} = props.show;

    return (
        <div className="">
            <div className="h-4/5 w-60 mx-auto">
            <img className="w-full h-full" src={image?.original} alt="" />
            <h1>{name}</h1>
            <button className="px-8 py-2 text-white font-semibold rounded text-base bg-blue-500 shadow-lg shadow-blue-500/50 ...">See Details</button>
            </div>
        </div>
    );
};

export default Show;