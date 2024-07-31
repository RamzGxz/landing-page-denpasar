import Biografi from "../components/Biografi";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import rekapKegiatan from './components/rekapKegiatan.jsx';

const LandingPages = () => {
    return ( 
        <>
        <Navbar />
        <Hero />
        <Biografi/>
        <rekapKegiatan/>
        </>
     );
}
 
export default LandingPages;