import React, { useEffect, useState } from 'react';
import Show from '../Show/Show';

const Shows = () => {
    const [displayShows, setDisplayShows] = useState([])

    useEffect(() => {
        fetch('https://api.tvmaze.com/search/shows?q=all')
        .then(res => res.json())
        .then(data => setDisplayShows(data))
    }, [])

    return (
        <div className="w-11/12 mx-auto">
            <div className="grid grid-cols-3 gap-8">
                {
                    displayShows.map(show => <Show
                        show={show.show}
                        ></Show>)
                }
            </div>
        </div>
    );
};

export default Shows;