import { FaFacebookSquare, FaLinkedin, FaGithub } from "react-icons/fa";

function Footer(){
    return (
        <>
           <div className="px-10 lg:px-20 py-5 flex flex-col lg:flex-row justify-around lg:gap-2 gap-4 items-center bg-black border-white border-t border-opacity-20 ">
               <div>
                     <p className="text-3xl text-red-500 font-semibold">STREAMSAGA</p>
               </div>
               <div className="text-center text-xs text-neutral-500 flex flex-col gap-1 lg:w-[450px]">
                      <p className="text-neutral-400 text-sm">Created by Andre Jarl</p>
                      <p>Disclaimer: This site does not store any files on its server.
                        All contents are provided by non-affiliated third parties.</p>
               </div>
               <div className="flex gap-4 ">
                   <a href="https://www.facebook.com/profile.php?id=100078410717230"><h1 className="text-3xl "> <FaFacebookSquare/></h1></a>
                   <a href="https://www.linkedin.com/in/andre-jarl-aniana-135588244/"><h1 className="text-3xl "> <FaLinkedin/></h1></a>
                   <h1 className="text-3xl "> <FaGithub/></h1>


               </div>
           </div>
        </>
    )
}


export default Footer