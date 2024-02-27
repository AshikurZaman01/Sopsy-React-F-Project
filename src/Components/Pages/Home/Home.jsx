import Banner from "../Banner/Banner";
import Hero from "../Hero/Hero";

import Products from "../Products/Products";
import TopProdcuts from "../TopProducts/TopProdcuts";

const Home = () => {




    return (
        <div className="container">
            <Hero></Hero>
            <Products></Products>
            <TopProdcuts></TopProdcuts>
            <Banner></Banner>
        </div>
    );
};

export default Home;