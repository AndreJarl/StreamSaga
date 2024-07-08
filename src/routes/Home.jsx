import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import PopularTVHero from "../components/PopularTVHero";
import TopRatedHero from "../components/TopRatedHero"

function Home(){

    return(
        <div>
            <Navbar/>
            <Hero/>
            <div className="flex flex-col justify-center mx-20">
            <PopularTVHero/>
            <TopRatedHero/>
            </div>
        </div>
    )
}

export default Home