import Banner from "../Banner/Banner";
import Footer from "../Footer/Footer";
import Hero from "../Hero/Hero";

import Products from "../Products/Products";
import Subscribe from "../Subscribe/Subscribe";
import Testimonial from "../Testimonials/Testimonial";
import TopProdcuts from "../TopProducts/TopProdcuts";

const Home = () => {




    return (
        <div>
            <Hero></Hero>
            <Products></Products>
            <TopProdcuts></TopProdcuts>
            <Banner></Banner>
            <Subscribe></Subscribe>
            <Products></Products>
            <Testimonial></Testimonial>
            <Footer></Footer>
        </div>
    );
};

export default Home;