import image1 from "../../../assets/hero/sale.png";
import image2 from "../../../assets/hero/shopping.png";
import image3 from "../../../assets/hero/women.png";

const Hero = () => {

    const ImageList = [
        {
            id: 1,
            img: image1,
            title: "Upto 50% off on all Men's Wear",
            description:
                "lorem His Life will forever be Changed dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
            id: 2,
            img: image2,
            title: "30% off on all Women's Wear",
            description:
                "Who's there lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
            id: 3,
            img: image3,
            title: "70% off on all Products Sale",
            description:
                "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
    ];

    return (
        <div className="relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200">
            <div className="h-[700px] w-[700px] bg-primary/40 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z[8]">

            </div>
        </div>
    );
};

export default Hero;