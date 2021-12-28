import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ShowDetails = () => {
  const [shows, setShows] = useState([]);
  const { showId } = useParams();

  useEffect(() => {
    fetch(`https://api.tvmaze.com/search/shows?q=all`)
      .then((res) => res.json())
      .then((data) => setShows(data));
  }, []);

  // console.log(shows)

  const singleShow = shows?.find((show) => showId == show.show.id);
  // console.log(singleShow)
  // console.log(singleShow.show.image.original)
  console.log(singleShow?.show.summary);

  return (
    <div>
      <section class="text-gray-700 body-font overflow-hidden bg-white">
        <div class="container px-5 py-24 mx-auto">
          <div class="lg:w-4/5 mx-auto flex flex-wrap">
            <img
              alt="ecommerce"
              class="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200"
              src={singleShow?.show.image.original}
            />
            <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 class="text-sm title-font text-gray-500 tracking-widest">
                TVSHOW NAME
              </h2>
              <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">
                {singleShow?.show.name}
              </h1>
              <p class="leading-relaxed">{singleShow?.show?.summary}</p>
              <div class="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5"></div>
              <div class="flex">
                <span class="title-font font-medium text-2xl text-gray-900">
                  $58.00
                </span>
                <button class="flex ml-auto text-white bg-indigo-500 shadow-lg shadow-indigo-500/50 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                  Book Ticket
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ShowDetails;
