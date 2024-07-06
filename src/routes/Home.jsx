import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import PopularTVHero from "../components/PopularTVHero";
import TopRatedHero from "../components/TopRatedHero"

function Home(){

    return(
        <div>
            <Navbar/>
            <Hero/>
            <PopularTVHero/>
            <TopRatedHero/>
        </div>
    )
}

export default Home