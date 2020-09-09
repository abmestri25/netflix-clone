import React,{useEffect,useState} from 'react'
import axios from './axios'
import requests from './requests'
import "./Banner.css"
import Navbar from './Navbar'
import "./Navbar.css"



const base_url = "https://image.tmdb.org/t/p/original/";


function Banner() {
    // everytime to have refreshed data
    const [movie, setMovie] = useState([]);
    useEffect(() => {
        async function fetchData(){
            // getting only netflix originals
            const request = await axios.get(requests.fetchNetflixOriginals);
            // this is to get random movie from netflix originals
            setMovie(request.data.results[Math.floor(Math.random() * request.data.results.length - 1)])
            return request;
        }
        fetchData();
    }, []);

    console.log(movie)
    function truncate(str,n){
        return str?.length > n ? str.substr(0,n -1) + "..." : str;
    }

    return (
        <header className="banner"
        style={{
            backgroundImage : `url(${base_url}${movie?.backdrop_path})`
        }}
        >  {/*header --> background image */}
        <Navbar/>
            <div className="banner_content">
                <div className="banner_title">
                    <h1>{movie?.title || movie?.name || movie?.original_name }</h1>
            
                </div>
                <div className="buttons">
                    <button className="banner_button">Play</button>
                    <button className="banner_button">My List</button>

                </div>
                <div className="description">
                <h3>{truncate(movie?.overview,150)}</h3>
                </div>
            </div>
            <div className="fade_button"></div>
            {/* title */}
            {/* div --> two buttons  -->play and ,mylist */}
            {/* description */}
        </header>
        
    )
}


export default Banner;