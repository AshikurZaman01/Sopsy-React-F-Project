import Img1 from "../../../assets/shirt/shirt.png";
import Img2 from "../../../assets/shirt/shirt2.png";
import Img3 from "../../../assets/shirt/shirt3.png";

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

    return (
        <div>
            <div className="container">

                <div className="text-left">
                    <p className="text-primary mb-1">Top Selling Products for you</p>
                    <h1 className="text-3xl font-bold">Best Products</h1>
                    <p className="text-second text-sm mt-1 mb-5">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        Sit asperiores modi Sit asperiores modi
                    </p>
                </div>

            </div>
        </div>
    );
};

export default TopProdcuts;