import { Link } from "react-router-dom";
import logo from "../../../assets/hero/logo.png";
import { BsSearchHeartFill } from "react-icons/bs";
import { FaCartPlus } from "react-icons/fa";

const Header = () => {
    return (
        <div>
            <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
                <section className="bg-primary/40 py-2">  {/* Styling for background color */}
                    <div className="container flex items-center justify-between">  {/* Flex container for header content */}

                        <div>  {/* Left side of header */}
                            {/* Link to home with logo and text */}
                            <Link to={"/"} className="font-bold text-2xl sm:text-3xl flex gap-2">
                                <img className="w-10 uppercase" src={logo} alt="Logo" />
                                Sopsy
                            </Link>
                        </div>

                        <div className="flex justify-between items-center gap-4">  {/* Right side of header */}
                            <div className="relative  group hidden sm:block">  {/* Search input */}
                                <input type="text" name="" id="" placeholder="Search" className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary" />
                                {/* Search icon, shown on hover */}
                                <BsSearchHeartFill className="text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3" />
                            </div>
                        </div>

                        <div>  {/* Cart button */}
                            {/* Button with gradient background and cart icon */}
                            <button className="bg-gradient-to-r from-primary to-second duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3 group " onClick={() => alert('Order not available yet')}>
                                <span className="group-hover:block hidden transition-all  duration-300">Order</span>  {/* Text inside button, shown on hover */}
                                <FaCartPlus className="text-xl text-white drop-shadow-sm cursor-pointer" />  {/* Cart icon */}
                            </button>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Header;  // Exporting the Header component