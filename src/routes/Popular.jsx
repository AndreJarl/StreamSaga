import { useState, useEffect } from "react"
import axios from "axios";
import ShowCard from "../components/ShowCard";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";
import { TfiBook } from "react-icons/tfi";
import { waveform } from 'ldrs';

function Popular(){

    const[shows, setShow] = useState([]);
    const[page, setPage] = useState(1);

    const nextPage = () =>{
        setPage((page) => page + 1)
    }
   
    const prevPage = () =>{
      setPage((page) => (page > 1 ? page-1 : page))
  }

    useEffect(()=>{
      const options = {
        method: 'GET',
        url: `https://api.themoviedb.org/3/tv/popular?language=en-US&page=${page}`,
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMTFmMGY4MjYxMTAzMDk1MTRiM2U5MjMxODY3NjE0ZSIsIm5iZiI6MTcyMDg3NDgwMS4wNzg5MzIsInN1YiI6IjY0ZDM1ZDZhMDM3MjY0MDBmZmZjN2M3ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SvITDlSrCc5ALQMz-c3Lbu742LIEhatgb-kmUh_QWHM'
        }
      };
        axios
          .request(options)
          .then(function (response) {
            setShow(response.data.results);
          
            
          })
          .catch(function (error) {
            console.error(error);
          });
    }, [shows])

    waveform.register()
    
    if(shows === null){
      return (
        <>
           <div>
              <Navbar/>
              <div className="flex flex-col justify-center items-center mt-20 lg:mt-28 mb-40 h-full">
          <div className="flex lg:flex-row flex-col gap-2 lg:gap-20 mx-5 justify-center items-center pb-5">
              <p className="text-4xl font-semibold text-left lg:text-5xl">Popular</p>
              <p className="text-base text-center text-neutral-500 ">Discover the Hottest Shows Everyone's Talking About!</p>
              <p className="text-sm flex bg-zinc-700 px-3 py-1 rounded-sm items-center gap-1 text-center lg:text-sm text-neutral-100 ">Page<TfiBook/>: {page}</p>
          </div>

          <div className='text-center flex flex-col justify-center items-center gap-16 text-2xl mt-16 text-white h-full'>       
           <l-waveform
                size="100"
                stroke="10"
                speed="1" 
                color="red" 
              ></l-waveform>
              <p className="font-medium text-neutral-300">Loading........</p>
          </div>
        </div>
        </div>
        <Footer/>
        </>
      )
    }


    return(
        <>
        <div>
              <Navbar/>
      <div className="flex flex-col justify-center items-center mt-20 lg:mt-28">
          <div className="flex lg:flex-row flex-col gap-2 lg:gap-20 mx-5 justify-center items-center pb-5">
              <p className="text-4xl font-semibold text-left lg:text-5xl">Popular</p>
              <p className="text-base text-center text-neutral-500 ">Discover the Hottest Shows Everyone's Talking About!</p>
              <p className="text-sm flex bg-zinc-700 px-3 py-1 rounded-sm items-center gap-1 text-center lg:text-sm text-neutral-100 ">Page<TfiBook/>: {page}</p>
          </div>
        <div className="grid grid-cols-2 gap-3 items-center justify-center mx-6 lg:mx-20 lg:grid-cols-5  md:grid-cols-3 lg:gap-4">
        {shows.map((show) => (
           <ShowCard key={show.id} shows={show} />
        ))}
      </div>
      <div className="flex flex-row items-center justify-center mx-2">
          <div className="bg-red-900 w-[20px] lg:w-[300px] h-[.5px]"></div>
          <div  className="flex gap-3 mt-5">
          <button onClick={prevPage} className="bg-red-900 flex items-center gap-2 py-1 px-3 text-xs lg:text-base lg:px-7 lg:py-1 text-white mt-5 mb-10"><FaArrowLeftLong/> PREV PAGE </button>
          <button onClick={nextPage} className="bg-red-900 flex items-center gap-2 py-1 px-3 text-xs lg:text-base lg:px-7 lg:py-1 text-white mt-5 mb-10">NEXT PAGE <FaArrowRightLong/></button>
          </div>
          <div className="bg-red-900 w-[20px] lg:w-[300px] h-[.5px]"></div>
       </div>     
     </div>
     <Footer />
        </div>
        </>
    )
}

export default Popular