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
            <nav className='flex justify-center items-center'>
                <img className='w-[75px] h-[90px]' src={logo} alt="" />
                <h1 className='text-6xl text-white'>Espresso Emporium</h1>
            </nav>
        </header>
    );
};

export default Header;