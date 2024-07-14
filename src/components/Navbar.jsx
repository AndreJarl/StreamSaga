import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { HiMenuAlt3, HiMenu   } from "react-icons/hi";

import {Link} from 'react-router-dom'


function Navbar(){

    const [query, setQuery] = useState("");
    const [isClicked, setIsClicked] = useState(false);

    const menuClicked = () => {
         setIsClicked(!isClicked);
         setQuery("");
    }
    return(
        <>
            <div className='hidden lg:flex lg:justify-center bg-black lg:pb-2 '>
                <div className="fixed bg-black w-full flex justify-center items-center border-b border-b-white z-30 border-opacity-20">  
                    <div className='flex justify-around w-[1000px] items-center py-5 gap-8 '>
                        <Link to={"/"}><p className='text-3xl font-semibold text-red-500'>STREAMSAGA</p></Link>
                         
                         <div className='flex items-center gap-2 bg-black border-white border-[1px] border-opacity-20 px-2 py-2 rounded-sm'>
                           <input className='bg-black outline-none w-[300px] h-5 py-1 text-base'  
                                   value={query} onChange={(event)=>setQuery(event.target.value)} type="search" name="" id="" placeholder='Search TV Shows...' />
                             {query.trim() !== "" ? 
                             (<Link to={`/search/${query}`}><h1 className='text-lg font-thin opacity-75'  > <FaSearch/></h1></Link>)
                              :(<h1 className='text-lg font-thin opacity-75'  > <FaSearch/></h1>)
                            }
                             
                         </div>
                         <div>
                         <ul className="flex text-base gap-5 font-semibold">
                            <Link to={"/popular"}><li>Popular</li></Link>
                            <Link to={"/toprated"}><li>Top Rated</li></Link>
                        </ul>
                         </div>
                    </div>
                </div>
            </div>

            <div className='lg:hidden flex justify-center items-center  pt-10 z-50'>
               <div className='fixed flex justify-center items-center w-full  z-50'>
                  <div className='flex justify-around items-center bg-black gap-5 w-full py-6 border-b border-b-white border-opacity-20 z-50'>

                    <Link to={"/"}><p className='text-3xl font-semibold text-red-500'>STREAMSAGA</p></Link>
                    <div className='hidden md:flex items-center gap-2 bg-black border-white border-[1px] border-opacity-20 px-2 py-1 rounded-sm'>
                           <input className='bg-black outline-none w-[350px] h-7 py-1'  
                                   value={query} onChange={(event)=>setQuery(event.target.value)} type="search" name="" id="" placeholder='Search TV Shows...' />
                             {query.trim() !== "" ? 
                             (<Link to={`/search/${query}`}><h1 className='text-xl font-thin opacity-80'  > <FaSearch/></h1></Link>)
                              :(<h1 className='text-xl font-thin opacity-80'  > <FaSearch/></h1>)
                            }
                             
                         </div>
                    <h1 className='text-4xl font-bold' onClick={menuClicked}>{isClicked ? <HiMenuAlt3 /> : < HiMenu />}</h1>
                  </div>
                  <div className={`bg-stone-950 pt-10 w-screen h-screen absolute top-20 duration-100 ${isClicked ? ' left-1'  :'-left-[1200px]'  }`} >
                  <div className='flex flex-col justify-center items-center bg-stone-950 '>
                  <div className='flex md:hidden lg:hidden items-center gap-2 bg-black border-white border-2 border-opacity-20 px-2 py-1 rounded-md'>
                           <input className='bg-black outline-none w-[230px] py-1'  
                                   value={query} onChange={(event)=>setQuery(event.target.value)} type="search" name="" id="" placeholder='Search TV Shows...' />
                             {query.trim() !== "" ? 
                             (<Link to={`/search/${query}`}><h1  onClick={menuClicked}  className='text-xl font-thin opacity-80'  > <FaSearch/></h1></Link>)
                              :(<h1 className='text-xl font-thin opacity-80'  > <FaSearch/></h1>)
                            }
                             
                         </div>
                    <ul className="flex flex-col justify-center items-center text-center text-2xl gap-14 font-medium py-14 ">
                            <Link to={"/popular"}><li>Popular</li></Link>
                            <Link to={"/toprated"}><li>Top Rated</li></Link>
                                </ul>
                   </div>            
               </div>
               </div>
            
            </div>
        </>
    )
}

export default Navbar