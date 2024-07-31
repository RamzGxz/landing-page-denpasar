import Biografi from "../components/Biografi";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import RekapKegiatan from "../components/rekapKegiatan";

const LandingPages = () => {
    return ( 
        <>
        <Navbar />
        <Hero />
        <Biografi/>
        <RekapKegiatan />
        </>
     );
}
 
export default LandingPages;