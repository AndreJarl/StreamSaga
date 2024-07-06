import axios from "axios";
import ShowCard from "./ShowCard";
import React, { useState, useEffect } from 'react';

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
        const slice = response.data.results.slice(0, 20);
        console.log('Fetched shows:', slice);
        setTVShows(slice);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    console.log('Updated shows:', shows);
  }, [shows]);

  return (
    <>
      <p className="text-3xl ml-14 my-5 font-bold text-left">Popular</p>
      <div className="grid grid-cols-5 items-center gap-3 justify-center mx-14">
        {shows.map((show) => (
          
               <ShowCard key={show.id} shows={show} />
        ))}
      </div>
    </>
  );
}

export default PopularTVHero;
