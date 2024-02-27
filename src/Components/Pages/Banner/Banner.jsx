import banner from "../../../assets/women/women.png";
import { GrSecure } from "react-icons/gr";
import { CiDeliveryTruck } from "react-icons/ci";
import { MdOutlinePayment } from "react-icons/md";
import { BiSolidOffer } from "react-icons/bi";

const Banner = () => {
    return (
        <div>
            <section className="min-h-[550px] flex justify-center items-center py-12 sm:py-0">
                <div className="container">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
                        {/* image section */}
                        <div data-aos="zoom-in">
                            <img
                                className="max-w-[400px] h-[350px] w-full mx-auto object-cover drop-shadow-[10px_10px_12px_rgba(0,0,0,0.1]"
                                src={banner} alt="" />
                        </div>
                        {/* image section */}

                        {/* Details section */}
                        <div className="flex flex-col justify-center gap-6 sm:pt-0">
                            <h1 className="text-3xl sm:text-4xl font-bold ">Winter Sale upto 50% off</h1>
                            <p className="text-sm text-gray-500 tracking-wide leading-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus temporibus exercitationem dicta debitis inventore, laborum eum mollitia numquam quam alias in. Modi incidunt a pariatur cupiditate deleniti unde ad dolor.</p>

                            <div>
                                <div data-aos="fade-up" className="flex items-center font-bold">
                                    <GrSecure className=" text-4xl h-12 w-12 shadow-sm  p-4 rounded-full bg-violet-100 dark:bg-orange-400" />
                                    <p>Quality Products</p>
                                </div>

                                <div data-aos="fade-up" className="flex items-center font-bold">
                                    <CiDeliveryTruck className=" text-4xl h-12 w-12 shadow-sm  p-4 rounded-full bg-violet-100 dark:bg-orange-400" />
                                    <p>Fast Delivery</p>
                                </div>

                                <div data-aos="fade-up" className="flex items-center font-bold">
                                    <MdOutlinePayment className=" text-4xl h-12 w-12 shadow-sm  p-4 rounded-full bg-violet-100 dark:bg-orange-400" />
                                    <p>Easy Payment</p>
                                </div>

                                <div data-aos="fade-up" className="flex items-center font-bold">
                                    <BiSolidOffer className=" text-4xl h-12 w-12 shadow-sm  p-4 rounded-full bg-violet-100 dark:bg-orange-400" />
                                    <p>Get Offers</p>
                                </div>
                            </div>
                        </div>
                        {/* Details section */}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Banner;