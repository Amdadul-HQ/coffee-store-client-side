import { NavLink } from 'react-router-dom';
import headerbg from '../../assets/more/15.jpg';
import logo from '../../assets/more/logo1.png'

const Header = () => {
    return (
        <header className='w-full h-[100px] flex justify-center items-center' style={{
            background: `linear-gradient(45deg,rgba(0,0,0,0.7),rgba(0,0,0,0.4)),url(${headerbg})`,
            backgroundSize:'cover',
            backgroundRepeat:'no-repeat',
            backgroundPosition:'center'
            }}>
            <nav className='flex w-[1320px] justify-between items-center'>
               <div className='flex items-center'>
                    <img className='w-[75px] h-[90px]' src={logo} alt="" />
                    <h1 className='text-6xl text-white'>Espresso Emporium</h1>
               </div>
               <ul className='justify-end font-Raleway text-white space-x-8'>
                <NavLink className={({isActive}) => isActive ? 'text-white border-white text-2xl hover:bg-transparent border-2 transition duration-500 hover:border-white hover:text-white bg-transparent py-2 px-5' : 'text-2xl hover:bg-transparent border-2 transition duration-500 border-[#E3B577] hover:border-white hover:text-white text-[#242222] bg-[#E3B577] py-2 px-5'} to='/dashboard'>Dashboard</NavLink>
                <NavLink className={({isActive}) => isActive ? 'text-white border-white text-2xl hover:bg-transparent border-2 transition duration-500 hover:border-white hover:text-white bg-transparent py-2 px-5' : 'text-2xl hover:bg-transparent border-2 transition duration-500 border-[#E3B577] hover:border-white hover:text-white text-[#242222] bg-[#E3B577] py-2 px-5'} to='/signup'>Sign Up</NavLink>
                <NavLink className={({isActive}) => isActive ? 'text-white border-white text-2xl hover:bg-transparent border-2 transition duration-500 hover:border-white hover:text-white bg-transparent py-2 px-5' : 'text-2xl hover:bg-transparent border-2 transition duration-500 border-[#E3B577] hover:border-white hover:text-white text-[#242222] bg-[#E3B577] py-2 px-5'} to='/signin'>Sign In</NavLink>
               </ul>
            </nav>
        </header>
    );
};

export default Header;