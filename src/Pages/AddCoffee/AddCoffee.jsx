import { Link } from 'react-router-dom';
import bg from '../../assets/more/11.png';
import { IoIosArrowRoundBack } from "react-icons/io";
import Swal from 'sweetalert2';
const AddCoffee = () => {

    const handleAddCoffee = e => {
        e.preventDefault()
        const form = e.target;
        const coffeeName = form.CoffeeName.value;
        const chefName = form.Chef.value;
        const supplier = form.Supplier.value;
        const taste = form.taste.value;
        const categoryName = form.Category.value;
        const price = parseInt(form.Price.value);
        const photo = form.Photo.value;
        const newCoffee = {
            coffeeName,chefName,supplier,taste,categoryName,price,photo
        }
        

        fetch('https://coffee-store-server-site-five.vercel.app/coffee',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(newCoffee)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.acknowledged){
            Swal.fire({
            title: "Good job!",
            text: "Your Coffee Added to Store!",
            icon: "success"
            });
                form.reset()
            }
        })
        
    }

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
                    <h1 className='text-5xl font-normal text-center'>Add New Coffee</h1>
                    <p className='max-w-[930px] text-[rgba(27,26,26,0.70)] font-normal text-lg text-center mx-auto font-Raleway mt-8'>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
                <form onSubmit={handleAddCoffee} className='font-Raleway w-full'>
                    <div className='mt-8 flex gap-x-6 mt'>
                        <div className='w-full'>
                            <label className='block text-xl text-[rgba(27,26,26,0.80)] font-semibold mb-4' htmlFor="CoffeeName">Name</label>
                            <input className='block p-3 rounded-md w-full' type="text" name="CoffeeName" id="CoffeeName" placeholder='Enter Coffee Name' required />
                        </div>
                        <div className='w-full'>
                            <label className='block text-xl text-[rgba(27,26,26,0.80)] font-semibold mb-4' htmlFor="Chef">Chef</label>
                            <input className='block p-3 rounded-md w-full' type="text" name="Chef" id="Chef" placeholder='Enter Coffee Chef' required />
                        </div>
                    </div>
                    <div className='mt-6 flex gap-x-6 mt'>
                        <div className='w-full'>
                            <label className='block text-xl text-[rgba(27,26,26,0.80)] font-semibold mb-4' htmlFor="Supplier">Supplier</label>
                            <input className='block p-3 rounded-md w-full' type="text" name="Supplier" id="Supplier" placeholder='Enter Coffee Supplier'  required/>
                        </div>
                        <div className='w-full'>
                            <label className='block text-xl text-[rgba(27,26,26,0.80)] font-semibold mb-4' htmlFor="taste">Taste</label>
                            <input className='block p-3 rounded-md w-full' type="text" name="taste" id="taste" placeholder='Enter Coffee taste' required />
                        </div>
                    </div>
                    <div className='mt-6 flex gap-x-6 mt'>
                        <div className='w-full'>
                            <label className='block text-xl text-[rgba(27,26,26,0.80)] font-semibold mb-4' htmlFor="Category">Category</label>
                            <input className='block p-3 rounded-md w-full' type="text" name="Category" id="Category" placeholder='Enter Coffee Category' required />
                        </div>
                        <div className='w-full'>
                            <label className='block text-xl text-[rgba(27,26,26,0.80)] font-semibold mb-4' htmlFor="Price">Price</label>
                            <input className='block p-3 rounded-md w-full' type="text" name="Price" id="Price" placeholder='Enter Coffee Price' required />
                        </div>
                    </div>
                        <div className='mt-6 w-full'>
                            <label className='block text-xl text-[rgba(27,26,26,0.80)] font-semibold mb-4' htmlFor="Photo">Photo</label>
                            <input className='block p-3 rounded-md w-full' type="url" name="Photo" id="Photo" placeholder='Enter Photo URL' required />
                        </div>
                    <button className='font-Rancho text-2xl transition-all duration-300 hover:text-white hover:bg-[#331A15] text-[#331A15] mt-6 bg-[#D2B48C] border-2 border-[#331A15] rounded-md w-full py-3' type='submit'>Add Coffee</button>
                </form>
            </div>

            
        </section>
    );
};

export default AddCoffee;