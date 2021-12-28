import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Dialog } from "@headlessui/react";

const ShowDetails = () => {
  const [shows, setShows] = useState([]);
  const { showId } = useParams();
  const [personDetails, setPersonDetails] = useState({});
  let [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    fetch(`https://api.tvmaze.com/search/shows?q=all`)
      .then((res) => res.json())
      .then((data) => setShows(data));
  }, []);

  const singleShow = shows?.find((show) => +showId === show.show.id);

  const handleOnBlur = (e) => {
    const personEmail = e.target.value;
    setPersonDetails(personEmail);
  };

  const setData = () => {
    // set data with localStorage
    let bookingTicket = {
      movieName: singleShow?.show.name,
      email: personDetails,
    };
    localStorage.setItem("movieData", JSON.stringify(bookingTicket));
  };

  const getData = () => {
    let bookingData = localStorage.getItem("movieData");
    bookingData = JSON.parse(bookingData);
    console.log(bookingData);
  };

  return (
    <div className="">
      <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
        <Dialog.Overlay />

        <div
          className="fixed z-10 inset-0 overflow-y-auto"
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
        >
          {/* BOOKING FORM */}

          <section className="h-screen bg-opacity-50">
            <div className="container max-w-2xl mx-auto shadow-md md:w-3/4">
              <div className="space-y-2 my-24 border-2 rounded bg-white">
                <div className="items-center w-full space-y-2 text-gray-500 md:inline-flex md:space-y-0">
                  <h2 className="max-w-sm mx-auto md:w-1/3">Movie Name</h2>
                  <div className="max-w-sm mx-auto md:w-2/3">
                    <div className=" relative ">
                      <input
                        type="text"
                        id="user-info-email"
                        className="font-semibold rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                        value={singleShow?.show.name}
                        disabled
                      />
                    </div>
                  </div>
                </div>
                <hr className="border-gray-200 h-2" />
                <div className="items-center w-full p-2 space-y-2 text-gray-500 md:inline-flex md:space-y-0">
                  <h2 className="max-w-sm mx-auto md:w-1/3">Premiered:</h2>
                  <div className="max-w-sm mx-auto space-y-5 md:w-2/3">
                    <div>
                      <div className=" relative ">
                        <input
                          type="text"
                          id="user-info-name"
                          className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                          value={singleShow?.show.premiered}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="items-center w-full p-2 space-y-2 text-gray-500 md:inline-flex md:space-y-0">
                  <h2 className="max-w-sm mx-auto md:w-1/3">Language:</h2>
                  <div className="max-w-sm mx-auto space-y-5 md:w-2/3">
                    <div>
                      <div className=" relative ">
                        <input
                          type="text"
                          id="user-info-name"
                          className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                          value={singleShow?.show.language}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="items-center w-full p-2 space-y-2 text-gray-500 md:inline-flex md:space-y-0">
                  <h2 className="max-w-sm mx-auto md:w-1/3">Genres:</h2>
                  <div className="max-w-sm mx-auto space-y-5 md:w-2/3">
                    <div>
                      <div className=" relative ">
                        <input
                          type="text"
                          id="user-info-name"
                          className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                          value={singleShow?.show.genres}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="items-center w-full p-2 space-y-2 text-gray-500 md:inline-flex md:space-y-0">
                  <h2 className="max-w-sm mx-auto md:w-1/3">Your Name</h2>
                  <div className="max-w-sm mx-auto space-y-5 md:w-2/3">
                    <div>
                      <div className=" relative ">
                        <input
                          onBlur={handleOnBlur}
                          type="text"
                          id="user-info-name"
                          className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                          placeholder="Your Name"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="items-center w-full p-2 space-y-2 text-gray-500 md:inline-flex md:space-y-0">
                  <h2 className="max-w-sm mx-auto md:w-1/3">Your Email</h2>
                  <div className="max-w-sm mx-auto space-y-5 md:w-2/3">
                    <div>
                      <div className=" relative ">
                        <input
                          onBlur={handleOnBlur}
                          type="email"
                          id="user-info-name"
                          className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                          placeholder="Your Email"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <hr />
                <div className="w-full px-4 pb-4 ml-auto text-gray-500 md:w-1/3">
                  <button
                    onClick={setData}
                    type="submit"
                    className="py-2 my-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                  >
                    BOOK NOW
                  </button>
                  <button
                    onClick={getData}
                    type="submit"
                    className="py-2 px-4  bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                  >
                    Get Data
                  </button>
                  <button
                    onClick={() => setIsOpen(false)}
                    type="submit"
                    className="py-2 my-2 px-4  bg-red-500 hover:bg-red-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                  >
                    CLOSE
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Dialog>

      <section className="text-gray-700 body-font overflow-hidden bg-white">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <img
              alt="ecommerce"
              className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200"
              src={singleShow?.show.image.original}
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                TVSHOW NAME
              </h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                {singleShow?.show.name}
              </h1>
              <p className="leading-relaxed">{singleShow?.show?.summary}</p>
              <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5"></div>
              <div className="flex">
                <button
                  onClick={() => setIsOpen(true)}
                  className="flex ml-auto text-white bg-indigo-500 shadow-lg shadow-indigo-500/50 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
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
