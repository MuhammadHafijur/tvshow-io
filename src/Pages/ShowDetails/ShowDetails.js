import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Dialog } from "@headlessui/react";

const ShowDetails = () => {
  const [shows, setShows] = useState([]);
  const { showId } = useParams();
  let [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    fetch(`https://api.tvmaze.com/search/shows?q=all`)
      .then((res) => res.json())
      .then((data) => setShows(data));
  }, []);


  const singleShow = shows?.find((show) => showId == show.show.id);
  console.log(singleShow?.show.summary);

  const handleOnBlur = (e) => {
    const personEmail = e.target.value;
  }

  const setData = () => {
    // set data with localStorage
    let bookingTicket = {movieName : singleShow?.show.name}
    localStorage.setItem('movieData', JSON.stringify(bookingTicket))
  }

  const getData = () => {
    let bookingData = localStorage.getItem('movieData')
    bookingData = JSON.parse(bookingData)
    console.log(bookingData)
  }

  return (
    <div className="">
      <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
        <Dialog.Overlay />

        <div
          class="fixed z-10 inset-0 overflow-y-auto"
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
        >
          {/* BOOKING FORM */}

          <section class="h-screen bg-opacity-50">
            <div class="container max-w-2xl mx-auto shadow-md md:w-3/4">
              <div class="space-y-2 my-24 border-2 rounded bg-white">
                <div class="items-center w-full space-y-2 text-gray-500 md:inline-flex md:space-y-0">
                  <h2 class="max-w-sm mx-auto md:w-1/3">Movie Name</h2>
                  <div class="max-w-sm mx-auto md:w-2/3">
                    <div class=" relative ">
                      <input
                        type="text"
                        id="user-info-email"
                        class="font-semibold rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                        value={singleShow?.show.name}
                        disabled
                      />
                    </div>
                  </div>
                </div>
                <hr class="border-gray-200 h-2" />
                <div class="items-center w-full p-2 space-y-2 text-gray-500 md:inline-flex md:space-y-0">
                  <h2 class="max-w-sm mx-auto md:w-1/3">Premiered:</h2>
                  <div class="max-w-sm mx-auto space-y-5 md:w-2/3">
                    <div>
                      <div class=" relative ">
                        <input
                          type="text"
                          id="user-info-name"
                          class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                          value={singleShow?.show.premiered}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="items-center w-full p-2 space-y-2 text-gray-500 md:inline-flex md:space-y-0">
                  <h2 class="max-w-sm mx-auto md:w-1/3">Language:</h2>
                  <div class="max-w-sm mx-auto space-y-5 md:w-2/3">
                    <div>
                      <div class=" relative ">
                        <input
                          type="text"
                          id="user-info-name"
                          class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                          value={singleShow?.show.language}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="items-center w-full p-2 space-y-2 text-gray-500 md:inline-flex md:space-y-0">
                  <h2 class="max-w-sm mx-auto md:w-1/3">Genres:</h2>
                  <div class="max-w-sm mx-auto space-y-5 md:w-2/3">
                    <div>
                      <div class=" relative ">
                        <input
                          type="text"
                          id="user-info-name"
                          class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                          value={singleShow?.show.genres}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                
                <div class="items-center w-full p-2 space-y-2 text-gray-500 md:inline-flex md:space-y-0">
                  <h2 class="max-w-sm mx-auto md:w-1/3">Your Name</h2>
                  <div class="max-w-sm mx-auto space-y-5 md:w-2/3">
                    <div>
                      <div class=" relative ">
                        <input
                          type="text"
                          id="user-info-name"
                          class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                          placeholder="Your Name"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="items-center w-full p-2 space-y-2 text-gray-500 md:inline-flex md:space-y-0">
                  <h2 class="max-w-sm mx-auto md:w-1/3">Your Email</h2>
                  <div class="max-w-sm mx-auto space-y-5 md:w-2/3">
                    <div>
                      <div class=" relative ">
                        <input
                          onBlur={handleOnBlur}
                          type="email"
                          id="user-info-name"
                          class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                          placeholder="Your Email"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <hr />
                <div class="w-full px-4 pb-4 ml-auto text-gray-500 md:w-1/3">
                  <button
                    onClick={() => setIsOpen(false)}
                    type="submit"
                    class="py-2 px-4  bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                  >
                    BOOK NOW
                  </button>
                  <button
                    onClick={setData}
                    type="submit"
                    class="py-2 px-4  bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                  >
                    Set Data
                  </button>
                  <button
                    onClick={getData}
                    type="submit"
                    class="py-2 px-4  bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                  >
                    Get Data
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Dialog>

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
                <button
                  onClick={() => setIsOpen(true)}
                  class="flex ml-auto text-white bg-indigo-500 shadow-lg shadow-indigo-500/50 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
                >
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
