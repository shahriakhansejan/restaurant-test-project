import About from "../About/About";
import Banner from "../Banner/Banner";
import Client from "../Client/Client";
import Slider from "../Slider/Slider";
import Testimonial from "../Testimonial/Testimonial";


const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <About></About>
           <Slider></Slider>
           <Testimonial></Testimonial>
           <Client></Client>
        </div>
    );
};


export default Home;