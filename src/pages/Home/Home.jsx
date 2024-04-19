import Header from "../../Components/Header/Header.jsx";
import Features from "../../Components/Features/Features.jsx";
import Gallery from "../../Components/Gallery/Gallery.jsx";
import Footer from "../../Components/Footer/Footer.jsx";
import Testimonials from "../../Components/Tesitimonials/Testimonials.jsx";

const Home = () => {

    return (
        <>
            <Header/>
            <Features></Features>
            <Gallery></Gallery>
            <Testimonials></Testimonials>
            <Footer></Footer>
        </>
    )
}

export default Home;