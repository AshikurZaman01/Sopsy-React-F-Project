import { Outlet } from 'react-router-dom';
import Navbar from '../Pages/Header/Navbar/Navbar';
import Header from '../Pages/Header/Header';

const Roots = () => {
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Roots;