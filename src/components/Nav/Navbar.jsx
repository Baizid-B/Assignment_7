// import { BsCoin } from "react-icons/bs";

import logo from '../../assets/logo.png'
import coin from '../../assets/coin-logo.png'
import './Navbar.css'

 {/* 1 step done */} {/* 1 step done */}
const Navbar = ({ getCoin, hendlePlayer }) => {


    return (
        <div className="container flex justify-between items-center mx-auto mt-4 mb-6 sticky top-0 z-50 backdrop-blur-xl bg-white/30">

            {/* navbar logo */}
            <div className="flex-1">
                <a href="#"><img src={logo} className='w-14' alt="Dream11 logo-img" /></a>
            </div>
            {/* navbar logo */}

            {/* navbar list */}
                <div className="flex justify-center items-center">
                    <ul className="menu menu-horizontal px-1 text-lg text-[#595959] font-semibold mr-4">
                        <li><a>Home</a></li>
                        <li><a>Fixture</a></li>
                        <li><a>Teams</a></li>
                        <li><a>Schedules</a></li>
                    </ul>
                    {/* 1 step done */} {/* 1 step done */}
                    <div>
                        <button className='btn1'>{getCoin} coin <img className='w-6 ml-1' src={coin} alt=""></img></button>
                    </div>
                     {/* 1 step done */} {/* 1 step done */}
                </div>
            {/* navbar list */}
        </div>
        
    );
};

export default Navbar;