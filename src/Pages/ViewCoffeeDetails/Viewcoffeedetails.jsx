import { IoIosArrowRoundBack } from "react-icons/io";
import { Link, useLoaderData } from "react-router-dom";
import bg from '../../assets/more/11.png';
const Viewcoffeedetails = () => {
    const coffee = useLoaderData()
    
    return (
            <section style={{
            background:`url(${bg})`,
            backgroundRepeat:'no-repeat',
            backgroundSize:'cover',
            backgroundPosition:'center',
        }}
        className='w-full'
        >
            <div className='max-w-[1320px] mx-auto'>
            <Link to='/'><button className='flex hover:text-[#D2B48C] transition-all duration-300 items-center my-12 gap-x-2 text-[#374151] font-normal text-3xl'><IoIosArrowRoundBack className='text-4xl'/> Back To Home</button></Link>
            </div>
            <div className='max-w-[1320px] mx-auto bg-[#F4F3F0] rounded-md px-28 py-16 mb-20'>
                    <h1 className='text-5xl font-normal text-center'>Coffee Details</h1>
                    <div className="flex justify-center gap-x-32 items-center">
                        <div>
                            <img className="w-[350px] h-[455px]" src={coffee.photo} alt="" />
                        </div>
                        <div className="font-Raleway">
                            <p className="text-[#5C5B5B] text-xl font-normal"><span className="text-[#1B1A1A] text-xl font-semibold">Name:</span> {coffee.coffeeName}</p>
                            <p className="text-[#5C5B5B] text-xl font-normal"><span className="text-[#1B1A1A] text-xl font-semibold">Chef:</span> {coffee.chefName}</p>
                            <p className="text-[#5C5B5B] text-xl font-normal"><span className="text-[#1B1A1A] text-xl font-semibold">Supplier:</span> {coffee.supplier}</p>
                            <p className="text-[#5C5B5B] text-xl font-normal"><span className="text-[#1B1A1A] text-xl font-semibold">Taste:</span> {coffee.taste}</p>
                            <p className="text-[#5C5B5B] text-xl font-normal"><span className="text-[#1B1A1A] text-xl font-semibold">Category:</span> {coffee.categoryName}</p>
                            <p className="text-[#5C5B5B] text-xl font-normal"><span className="text-[#1B1A1A] text-xl font-semibold">Price:</span> {coffee.price} Taka</p>
                        </div>
                    </div>
            </div>
        </section>
    );
};

export default Viewcoffeedetails;