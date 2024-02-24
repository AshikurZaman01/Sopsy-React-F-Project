import lightBtn from '../../../assets/website/light-mode-button.png';
import DarkBtn from '../../../assets/website/dark-mode-button.png';
import { useEffect, useState } from 'react';

const DarkMode = () => {

    const [theme, setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light')
    const element = document.documentElement;

    useEffect(() => {
        if (theme === 'dark') {
            element.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            element.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [element.classList, theme])

    return (
        <div className='relative'>
            {
                theme === 'dark' ?
                    <img
                        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
                        className='w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all  duration-300' src={DarkBtn} alt="" />
                    :
                    <img
                        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
                        className='w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300 ' src={lightBtn} alt="" />
            }
        </div>
    );
};

export default DarkMode;