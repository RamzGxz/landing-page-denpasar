import Biografi from "../components/Biografi";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Berita from "../components/Berita";

const LandingPages = () => {
    return ( 
        <>
        <Navbar />

        <Berita/>
        <Hero />
        <Biografi/>

        </>
     );
}
 
export default LandingPages;