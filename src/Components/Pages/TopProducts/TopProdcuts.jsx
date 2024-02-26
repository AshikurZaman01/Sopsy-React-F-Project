import { useEffect } from "react";
import Img1 from "../../../assets/shirt/shirt.png";
import Img2 from "../../../assets/shirt/shirt2.png";
import Img3 from "../../../assets/shirt/shirt3.png";
import TopProdcut from "./TopProdcut";
import AOS from "aos";
import "aos/dist/aos.css";

const TopProdcuts = () => {

    const ProductsData = [
        {
            id: 1,
            img: Img1,
            title: "Casual Wear",
            description:
                "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
            id: 2,
            img: Img2,
            title: "Printed shirt",
            description:
                "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
            id: 3,
            img: Img3,
            title: "Women shirt",
            description:
                "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
    ];

    useEffect(() => {
        AOS.init({
            offset: 100,
            duration: 800,
            easing: "ease-in-sine",
        });
        AOS.refresh();
    }, []);

    return (
        <div>
            <div className="container">

                <div data-aos="fade-left" className="text-left mb-32">
                    <p className="text-primary mb-1">Top Selling Products for you</p>
                    <h1 className="text-3xl font-bold">Best Products</h1>
                    <p className="text-second text-sm mt-1 mb-5">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        Sit asperiores modi Sit asperiores modi
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:gap-5 place-items-center">
                    {
                        ProductsData.map((item, index) => (
                            <div key={item.id}>
                                <TopProdcut item={item}></TopProdcut>
                            </div>
                        ))
                    }
                </div>

            </div>
        </div>
    );
};

export default TopProdcuts;