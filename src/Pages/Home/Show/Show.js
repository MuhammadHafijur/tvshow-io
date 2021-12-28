import React from 'react';
import { Link } from 'react-router-dom';

const Show = (props) => {
    const {name,genres, rating, language, id, image} = props.show;

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
            <p class="text-gray-700 dark:text-gray-300 font-semibold text-md">
            Language : {language}
            </p>
            <p class="text-gray-700 dark:text-gray-300 font-semibold text-md">
            Genres : {genres}
            </p>
            <p class="text-gray-700 flex items-center dark:text-gray-300 font-semibold text-md">
            Rating : {rating.average} <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="#F2B31E">
  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
</svg>
            </p>
            <Link to={`/showDetails/${id}`}><button className="my-2 px-8 py-2 text-white font-semibold rounded text-base bg-blue-500 shadow-lg shadow-blue-500/50">See Details</button></Link>
        </div>
    </div>
</div>

            
        </div>
    );
};

export default Show;