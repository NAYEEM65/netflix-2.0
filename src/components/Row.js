import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi';

import Movie from './Movie';

const Row = ({ title, fetchURL, rowId }) => {
    const [movies, setMovies] = useState([]);

    const slideLeft = () => {
        let slider = document.getElementById('slider' + rowId);
        slider.scrollLeft = slider.scrollLeft - 500;
    };
    const slideRight = () => {
        let slider = document.getElementById('slider' + rowId);
        slider.scrollLeft = slider.scrollLeft + 500;
    };
    useEffect(() => {
        axios.get(fetchURL).then((res) => {
            setMovies(res.data.results);
        });
    }, [fetchURL]);
    return (
        <>
            <h2 className="text-white font-bold md:text-xl p-4">{title}</h2>
            <div className="relative flex items-center group">
                <HiOutlineChevronLeft
                    onClick={slideLeft}
                    className="bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
                    size={40}
                />
                <div
                    id={'slider' + rowId}
                    className={`h-full w-full whitespace-nowrap overflow-x-scroll scroll-smooth scrollbar-hide relative`}
                >
                    {movies.map((item, id) => (
                        <Movie key={id} item={item} />
                    ))}
                </div>
                <HiOutlineChevronRight
                    onClick={slideRight}
                    className="bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
                    size={40}
                />
            </div>
        </>
    );
};

export default Row;
