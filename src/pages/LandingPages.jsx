import Biografi from "../components/Biografi";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import rekapKegiatan from "../components/rekapKegiatan.jsx";
import Pojok from "../components/Pojok";
import ProfilNyoman from "../components/ProfilNyoman";
import Berita from "../components/Berita";


const LandingPages = () => {
    return ( 
        <>
        <Navbar />
        <Pojok />
        <ProfilNyoman />
        <Hero />
        <Biografi/>
        <rekapKegiatan/>
        <Berita/>
        </>
     );
}
 
export default LandingPages;