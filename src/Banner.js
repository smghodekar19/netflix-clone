import React, { useEffect, useState } from 'react'
import axios from'./axios';
import requests from './requests';
import './Banner.css';

function Banner() {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData() {
           const request = await axios.get(requests.fetchNetflixOriginals);
           console.log(request.data.results);
           setMovie(request.data.results[
               Math.floor(Math.random() * request.data.results.length -1)
            ]);            
        }
        fetchData();
    }, []);
    function truncate(str, n) {
        return str?.length >n ? str.substr(0, n-1) + "..." : str;
    }
  return (
    <header className='banner'
        style={{
            backgroundSize: 'cover',
            backgroundImage: `url(
                "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`,
            backgroundPosition: 'center center',
        }}>
        <div className='banner__contents'>
            <h1 className='banner__title'>{movie?.title || movie?.name || movie?.original_name}</h1>
            <div className='banner__buttons'>
                <button className='banner_button'>Play</button>
                <button className='banner_button'>My Lish</button>
            </div>
            <h3 className='banner__description'>
                {truncate(movie?.overview, 150)}
            </h3>
        </div>

        <div className='bannner__fadeBottom' />
    </header>
  )
}

export default Banner