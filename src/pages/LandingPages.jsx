import Biografi from "../components/Biografi";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Pojok from "../components/Pojok";
import ProfilNyoman from "../components/ProfilNyoman";
import RekapKegiatan from "../components/rekapKegiatan";
import Berita from "../components/Berita";

const LandingPages = () => {
    return ( 
        <>
        <Navbar />
        <Pojok />
        <ProfilNyoman />
        <Hero />
        <Biografi/>
        <RekapKegiatan />
        <Berita/>
        </>
     );
}
 
export default LandingPages;