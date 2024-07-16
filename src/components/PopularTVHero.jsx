import axios from "axios";
import ShowCard from "./ShowCard";
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { waveform } from 'ldrs';
waveform.register()

function PopularTVHero() {
  const [shows, setTVShows] = useState([]);

  useEffect(() => {
    const options = {
      method: 'GET',
      url: 'https://api.themoviedb.org/3/tv/popular?language=en-US&page=1',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMTFmMGY4MjYxMTAzMDk1MTRiM2U5MjMxODY3NjE0ZSIsIm5iZiI6MTcyMDEwOTE4Mi42NjI4NzQsInN1YiI6IjY0ZDM1ZDZhMDM3MjY0MDBmZmZjN2M3ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tD-t-f53h85Hh1glk58ifjEhhgZ2n1hP9UuQUGdMuDg'
      }
    };

    axios
      .request(options)
      .then(function (response) {
        const slice = response.data.results.slice(0, 15);
        // console.log('Fetched shows:', slice);
        setTVShows(slice);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    console.log('andrepogi69');
  }, [shows]);

    if(shows === null){
       return(
          <>
          <div className="flex flex-col justify-center items-center mt-10 pb-16">
              <div className="flex flex-col text-center mx-2 justify-around items-center pb-14 ">
              <p className="text-4xl font-semibold text-left lg:text-5xl">Popular</p>
              <p className="text-sm text-center lg:text-lg text-neutral-400 ">Discover the Hottest Shows Everyone's Talking About!</p>
          </div>
          <div className='text-center flex flex-col justify-center items-center gap-16 text-2xl mt-4 text-white h-full'>       
                  <l-waveform
                        size="100"
                        stroke="10"
                        speed="1" 
                        color="red" 
                      ></l-waveform>
              <p className="font-medium text-neutral-300">Loading........</p>
         </div>
        
         </div>
          </>
       )
    }

  return (
    <>
       
      <div className="flex flex-col justify-center items-center ">
          <div className="flex flex-col text-center mx-2 justify-around items-center pb-10 ">
              <p className="text-5xl font-semibold text-left lg:text-5xl">Popular</p>
              <p className="text-base text-center lg:text-lg text-neutral-400 ">Discover the Hottest Shows Everyone's Talking About!</p>
          </div>
        <div className="grid grid-cols-2 gap-3 items-center justify-center mx-6 lg:mx-20 lg:grid-cols-5  md:grid-cols-3 lg:gap-4">
        {shows.map((show) => (
           <ShowCard key={show.id} shows={show} />
        ))}
      </div>
      <div className="flex flex-row items-center justify-center mx-2 mt-10">
          <div className="bg-red-900 w-[100px] lg:w-[300px] h-[.5px]"></div>
          <Link to={"/popular"}><button className="bg-red-900  py-1 px-3 lg:px-7 lg:py-3 text-white mt-5 mb-10">Show more</button></Link>
          <div className="bg-red-900 w-[100px] lg:w-[300px] h-[.5px]"></div>
       </div>     
     </div>
    </>
  );
}

export default PopularTVHero;
