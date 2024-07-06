import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import {Link} from 'react-router-dom'


function Navbar(){

    const [query, setQuery] = useState("");

    return(
        <>
        <div>
            <div className=" py-5 bg-zinc-600 flex justify-around items-center ">
                <Link to={"/"}><p className="text-white font-bold text-3xl ">StreamSaga</p></Link>
                <div className=" flex gap-2 justify-center items-center">
                    <input className="bg-zinc-700 h-8 rounded-sm border-zinc-900 px-3 w-96" style={{outline:'none'}} type="search" name="" id="" 
                     value = {query} onChange={(event)=>setQuery(event.target.value)}
                    placeholder="Search TV Show" />
                    {query.trim() !== "" ?
                     (<Link to={`/search/${query}`}><h1  className='text-xl text-amber-50 cursor-pointer'><FaSearch/></h1></Link>
                      ):<h1 className='text-xl text-amber-50 cursor-pointer'><FaSearch/></h1>}
                </div>
                <ul className="flex gap-5 font-bold">
                    <li>Popular</li>
                    <li>Top Rated</li>
                    <li>Ongoing</li>
                </ul>

            </div>
        </div>
        </>
    )
}

export default Navbar