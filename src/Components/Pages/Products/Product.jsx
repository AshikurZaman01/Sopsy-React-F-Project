import { FaStar } from "react-icons/fa";

const Product = ({ product }) => {

    console.log(product);

    const { img, title, rating, color, aosDelay } = product || {};
    return (
        <div className="w-[150px] mx-auto">
            <div className="h-[220px]">
                <img className="w-full h-full object-cover rounded" src={img} alt="" />
            </div>
            <div>
                <h3 className="text-xl font-semibold ">{title}</h3>
                <h5>{color}</h5>
                <p className="inline-flex items-center gap-1"><FaStar className="text-primary" />{rating}</p>
            </div>
        </div>
    );
};

export default Product;