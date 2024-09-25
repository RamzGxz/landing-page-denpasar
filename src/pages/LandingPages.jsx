import Biografi from "../components/Biografi";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import RekapKegiatan from "../components/rekapKegiatan";
import Pojok from "../components/Pojok";
import ProfilNyoman from "../components/ProfilNyoman";
import Berita from "../components/Berita";


const LandingPages = () => {
    return ( 
        <>
        <Navbar />
        <Hero />
        <Biografi/>
        <Pojok />
        <ProfilNyoman />
        <RekapKegiatan />
        <Berita/>
        
        </>
     );
}
 
export default LandingPages;