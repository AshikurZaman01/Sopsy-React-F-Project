import Img1 from "../../../assets/women/women.png";
import Img2 from "../../../assets/women/women2.jpg";
import Img3 from "../../../assets/women/women3.jpg";
import Img4 from "../../../assets/women/women4.jpg";
import Product from "./Product";

const Products = () => {

    const ProductsData = [
        {
            id: 1,
            img: Img1,
            title: "Women Ethnic",
            rating: 5.0,
            color: "white",
            aosDelay: "0",
        },
        {
            id: 2,
            img: Img2,
            title: "Women western",
            rating: 4.5,
            color: "Red",
            aosDelay: "200",
        },
        {
            id: 3,
            img: Img3,
            title: "Goggles",
            rating: 4.7,
            color: "brown",
            aosDelay: "400",
        },
        {
            id: 4,
            img: Img4,
            title: "Printed T-Shirt",
            rating: 4.4,
            color: "Yellow",
            aosDelay: "600",
        },
        {
            id: 5,
            img: Img2,
            title: "Fashin T-Shirt",
            rating: 4.5,
            color: "Pink",
            aosDelay: "800",
        },
    ];

    return (
        <div className="my-10">
            <div className="text-center">
                <p className="text-primary mb-1">Top Selling Products for you</p>
                <h1 className="text-3xl font-bold">Prodcuts</h1>
                <p className="text-second text-sm mt-1 mb-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit asperiores modi Sit asperiores modi</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-5">
                {
                    ProductsData.map(product => <Product key={product.id} product={product}></Product>)
                }
            </div>
        </div>
    );
};

export default Products;