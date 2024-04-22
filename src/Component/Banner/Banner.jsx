import bannerBg from '../../assets/more/3.png'

const Banner = () => {
    return (
        <section 
        style={{
            background:`url(${bannerBg})`,
            backgroundRepeat:'no-repeat',
            backgroundPosition:'center',
            backgroundSize:'cover',
        }} 
        className='w-full h-[calc(100vh-100px)] flex justify-around items-center'>
            <div></div>
            <div className='ml-56 space-y-5'>
                <h1 className='text-5xl text-white'>Would you like a Cup of Delicious Coffee?</h1>
                <p className='font-Raleway text-base font-normal text-white max-w-[720px]'>It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</p>
                <button className='text-2xl hover:bg-transparent border-2 transition duration-500 border-[#E3B577] hover:border-white hover:text-white text-[#242222] bg-[#E3B577] py-2 px-5'>Learn More</button>
            </div>
        </section>
    );
};

export default Banner;