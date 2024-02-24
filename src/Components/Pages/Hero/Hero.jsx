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
            <div className="h-[700px] w-[700px] bg-primary/40 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z[8]"></div>


            <div className="pb-8 sm:pb-0">
                <div className="grid grid-cols-1  sm:grid-cols-2 px-3">
                    <div className="flex  flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2  sm:order-1 relative  z-10">
                        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">Lorem ipsum dolor.</h1>
                        <p className="text-sm my-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quisquam neque praesentium. Expedita molestias dolore possimus nihil aperiam quos perferendis.</p>

                        <div>
                            <button className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full ml-1">Order now</button>
                        </div>
                    </div>

                    <div className="order-1 sm:order-2 ">
                        <div className="relative z-10 ">
                            <img className="w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-125 object-contain mx-auto" src={image2} alt="" />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Hero;