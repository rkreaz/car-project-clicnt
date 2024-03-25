import AboutUs from "../AboutUs/AboutUs";
import Services from "../Services/Services";
import Banner from "../Shared/Banner/Banner";
// import Footer from "../Shared/Footer/Footer";
// import NavBar from "../Shared/NavBar/NavBar";

const Home = () => {
    return (
        <div>
            {/* <NavBar></NavBar> */}
            <Banner></Banner>
            <AboutUs></AboutUs>
            <Services></Services>
            {/* <Footer></Footer> */}
        </div>
    );
};

export default Home;