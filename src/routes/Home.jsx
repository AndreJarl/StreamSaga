import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import PopularTVHero from "../components/PopularTVHero";
import TopRatedHero from "../components/TopRatedHero"
import Footer from "../components/Footer";

function Home(){

    return(
        <div>
            <Navbar/>
            <Hero/>
            <div className=" mt-20 ">
            <PopularTVHero/>
            <TopRatedHero/>
            </div>
            <Footer />
        </div>
    )
}

export default Home