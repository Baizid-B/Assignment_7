import banner from '../../assets/bg-shadow.png'
import cricket from '../../assets/banner-main.png'
// import './Navbar.css'

const MainBanner = ({handleClaimCoin}) => {
    return (
        <div className="container mx-auto relative">
            <img className='rounded-xl bg-black w-full' src={banner} alt="" />
            <div className=' absolute top-[15%] left-52 text-center'>
                <img className='mx-auto' src={cricket} alt="" />
                <h1 className='text-4xl font-bold text-white mt-4 mb-4'>Assemble Your Ultimate Dream 11 Cricket Team</h1>
                <p className='text-xl text-[#b9b9b9] mb-3'>Beyond Boundaries Beyond Limits</p>
                <span className='border border-yellow-300 py-4 px-1 mb-3 rounded-xl'>
                    <button onClick={() => handleClaimCoin() } className='bg-yellow-300 px-3 py-2 mb-3 rounded-xl '>Claim Free Credit</button>
                </span>
            </div>
        </div>
    );
};

export default MainBanner;