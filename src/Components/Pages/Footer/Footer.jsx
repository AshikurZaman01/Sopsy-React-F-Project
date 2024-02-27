import React from 'react';
import Logo from '../../../assets/hero/logo.png';
import banner from '../../../assets/website/footer-pattern.jpg';
import { FaInstagram, FaFacebook, FaLinkedinIn, FaLocationArrow, FaMobileAlt } from "react-icons/fa";

const Footer = () => {
    const bannerImage = {
        backgroundImage: `url(${banner})`,
        backgroundPosition: "bottom",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "100%",
        width: "100%"
    };

    const FooterLinks = [
        {
            title: "Home",
            link: "/#",
        },
        {
            title: "About",
            link: "/#about",
        },
        {
            title: "Contact",
            link: "/#contact",
        },
        {
            title: "Blog",
            link: "/#blog",
        },
    ];

    return (
        <div className='text-white mb-20' style={bannerImage}>
            <div className='container'>
                <div className='grid md:grid-cols-3 pb-44 pt-5'>
                    <div className='py-8 px-8 space-y-5'>
                        <h1 className='flex items-center gap-3 text-2xl font-semibold'>
                            <img className='max-w-[50px]' src={Logo} alt="Shopsy Logo" />
                            Shopsy
                        </h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                            Placeat ullam ex eum praesentium, libero, eligendi porro nulla et consectetur quam suscipit.
                            Incidunt fugiat earum quod autem quia, veritatis a laudantium.
                        </p>
                    </div>

                    <div className='grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10'>
                        <div>
                            <div className='py-8 px-4'>
                                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">Important Links</h1>
                                <ul className="flex flex-col gap-3">
                                    {FooterLinks.map((link) => (
                                        <li
                                            className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200"
                                            key={link.title}
                                        >
                                            <a href={link.link}>{link.title}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div>
                            <div className='py-8 px-4'>
                                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">Links</h1>
                                <ul className="flex flex-col gap-3">
                                    {FooterLinks.map((link) => (
                                        <li
                                            className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200"
                                            key={link.title}
                                        >
                                            <a href={link.link}>{link.title}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div>
                        <div className="flex items-center gap-3 mt-6">
                            <a href="#">
                                <FaInstagram className="text-3xl" />
                            </a>
                            <a href="#">
                                <FaFacebook className="text-3xl" />
                            </a>
                            <a href="#">
                                <FaLinkedinIn className="text-3xl" />
                            </a>
                        </div>
                        <div className="mt-6">
                            <div className="flex items-center gap-3">
                                <FaLocationArrow />
                                <p>Noida, Uttar Pradesh</p>
                            </div>
                            <div className="flex items-center gap-3 mt-3">
                                <FaMobileAlt />
                                <p>+91 123456789</p>
                            </div>
                        </div>
                    </div>
                    </div>

                   
                </div>
            </div>
        </div>
    );
};

export default Footer;
