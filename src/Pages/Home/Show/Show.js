import React from 'react';
import { Link } from 'react-router-dom';

const Show = (props) => {
    const {name,genres, id, image} = props.show;

    return (
        <div className="">
            
<div class="overflow-hidden shadow-lg rounded-lg h-90 w-60 md:w-80 cursor-pointer m-auto">
    <div class="w-full h-4/5">
        <img src={image?.original} class="max-h-full w-full object-cover" alt="movie" />
        <div class="bg-white dark:bg-gray-800 w-full p-4">
            <p class="text-indigo-500 text-md font-medium">
            </p>
            <p class="text-gray-800 dark:text-white text-xl font-medium mb-2">
            {name}
            </p>
            <p class="text-gray-400 dark:text-gray-300 font-light text-md">
            {genres}
            </p>
            <Link to={`/showDetails/${id}`}><button className="my-2 px-8 py-2 text-white font-semibold rounded text-base bg-blue-500 shadow-lg shadow-blue-500/50">See Details</button></Link>
        </div>
    </div>
</div>

            
        </div>
    );
};

export default Show;