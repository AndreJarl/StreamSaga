import OnePiece from "../assets/image.png"

function Hero(){
    return(
        <>
        <div className="mt-7 flex gap-7 mx-20 justify-center items-center">
               <div>
                <img className="w-96" src={OnePiece} alt="" srcset="" />
                </div>
               <div className="flex-col">
                    <p> One Piece</p>
                    <p className="mr-20">
                    Barely surviving in a barrel after passing through a terrible whirlpool at sea, carefree Monkey D. Luffy ends up aboard a ship under attack by fearsome pirates. Despite being a naive-looking teenager, he is not to be underestimated.                </p>
                    <button className="bg-red-400">Watch now</button>
              </div>
         </div>
        </>
    )
}

export default Hero