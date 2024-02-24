import { Link } from "react-router-dom";
import { FaCaretDown } from "react-icons/fa";

const Navbar = () => {
    // List of main navigation links
    const navList = [
        { id: 1, name: 'Home', link: '/' },
        { id: 2, name: 'Top Rated', link: '/topRated' },
        { id: 3, name: 'Kids Wear', link: '/kidsWear' },
        { id: 4, name: 'Mens Wear', link: '/mensWear' },
        { id: 5, name: 'Electronics', link: '/electronics' },
    ];

    // Dropdown menu items
    const dropdownLinks = [
        { id: 1, name: 'Trending Products', link: '/trendingProducts' },
        { id: 2, name: 'Best Selling', link: '/bestSelling' },
        { id: 3, name: 'Top Rated', link: '/topRated' },
    ];

    return (
        <div>
            <nav className="flex justify-center">
                <ul className="sm:flex items-center gap-4 hidden">
                    {/* Main navigation links */}
                    {navList.map((item, indx) => {
                        return (
                            <li key={item.id}><Link className="inline-block px-4 hover:text-primary duration-200 " to={item.link}>{item.name}</Link></li>
                        );
                    })}

                    {/* Dropdown */}
                    <li className="group relative cursor-pointer">
                        <Link className="flex items-center gap-[2px] py-2 hover:text-primary duration-200">Trending Items
                            <span>
                                <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
                            </span>
                        </Link>

                        {/* Dropdown menu */}
                        <div className="absolute z-[9999] hidden group-hover:block w-[150px] rounded-md p-2 text-black shadow-md">
                            <ul>
                                {dropdownLinks.map(drop => {
                                    return (
                                        <li className="inline-block w-full rounded-md py-2 hover:bg-primary/20" key={drop.id}><Link to={drop.link}>{drop.name}</Link></li>
                                    );
                                })}
                            </ul>
                        </div>
                        {/* End Dropdown menu */}
                    </li>
                    {/* End Dropdown */}
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;
