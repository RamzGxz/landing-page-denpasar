import Biografi from "../components/Biografi";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import RekapKegiatan from "../components/rekapKegiatan";
import Berita from "../components/Berita";


const LandingPages = () => {
    return ( 
        <>
        <Navbar />
        <Hero />
        <Biografi/>
        <RekapKegiatan />
         <Berita/>
        </>
     );
}
 
export default LandingPages;