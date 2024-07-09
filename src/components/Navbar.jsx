import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import {Link} from 'react-router-dom'


function Navbar(){

    const [query, setQuery] = useState("");

    return(
        <>
            <div className='flex justify-center bg-black pb-4 '>
                <div className="fixed bg-black w-full flex justify-center items-center border-b border-b-white z-30 border-opacity-20">  
                    <div className='flex justify-around w-[1200px] items-center py-7 gap-8 '>
                        <Link to={"/"}><p className='text-3xl font-semibold text-red-500'>StreamSaga</p></Link>
                         
                         <div className='flex items-center gap-2 bg-black border-white border-2 border-opacity-20 px-2 py-1 rounded-md'>
                           <input className='bg-black outline-none w-[400px] py-1'  
                                   value={query} onChange={(event)=>setQuery(event.target.value)} type="search" name="" id="" placeholder='Search TV Shows...' />
                             {query.trim() !== "" ? 
                             (<Link to={`/search/${query}`}><h1 className='text-xl font-thin opacity-80'  > <FaSearch/></h1></Link>)
                              :(<h1 className='text-xl font-thin opacity-80'  > <FaSearch/></h1>)
                            }
                             
                         </div>
                         <div>
                         <ul className="flex text-xl gap-5 font-semibold">
                            <li>Popular</li>
                            <li>Top Rated</li>
                            <li>Ongoing</li>
                        </ul>
                         </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar