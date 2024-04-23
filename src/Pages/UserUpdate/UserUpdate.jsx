
import { IoIosArrowRoundBack } from "react-icons/io";
import { Link, useLoaderData } from "react-router-dom";
import bg from '../../assets/more/11.png';
import { useState } from "react";
import Swal from "sweetalert2";

const UserUpdate = () => {
    const loadedUser = useLoaderData()
    const {_id,email,fullName,phone,photo} = loadedUser;
    const [profilePic,setProfilePic] = useState(photo)

    
    const firstName = fullName.split(' ')[0];
    const lastName = fullName.split(' ')[1];

    const handleUpdateProfile = e => {
        e.preventDefault()
        const form = e.target;
        const updateEmail = form.email.value;
        const updateFirstName = form.firstName.value;
        const updateLastName = form.lastName.value;
        const updateFullName = updateFirstName+' '+updateLastName;
        const updatePhoto = form.Photo.value;
        const updatePhone = form.phone.value;
        const updateUser ={updateEmail,updateFullName,updatePhone,updatePhoto}
        fetch(`http://localhost:5000/user/${_id}`,{
            method:'PATCH',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(updateUser)
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount>0){
            Swal.fire({
            title: "Good job!",
            text: "Your User Details Successfully Updated!",
            icon: "success"
            });
            }
            setProfilePic(updatePhoto)
            console.log(data);
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
            <h1 className='text-5xl font-normal text-center'>Update User Info</h1>
            <div className="flex justify-center my-8">
                <img className="w-96 h-[400px] rounded-full p-2 border-2 border-[#331A15]" src={profilePic} alt="" />
            </div>
            <form onSubmit={handleUpdateProfile} className='font-Raleway w-full'>
                    <div className='mt-8 flex gap-x-6 mt'>
                        <div className='w-full'>
                            <label className='block text-xl text-[rgba(27,26,26,0.80)] font-semibold mb-4' htmlFor="firstName">First Name</label>
                            <input defaultValue={firstName} className='block p-3 rounded-md w-full' type="text" name="firstName" id="firstName" placeholder='First Name' required />
                        </div>
                        <div className='w-full'>
                            <label className='block text-xl text-[rgba(27,26,26,0.80)] font-semibold mb-4' htmlFor="lastName">Last Name</label>
                            <input defaultValue={lastName} className='block p-3 rounded-md w-full' type="text" name="lastName" id="lastName" placeholder='Last Name' required />
                        </div>
                    </div>
                    <div className='mt-6 flex gap-x-6 mt'>
                        <div className='w-full'>
                            <label className='block text-xl text-[rgba(27,26,26,0.80)] font-semibold mb-4' htmlFor="email">Email</label>
                            <input defaultValue={email} className='block p-3 rounded-md w-full' type="email" name="email" id="email" placeholder='Enter email'  required/>
                        </div>
                        <div className='w-full'>
                            <label className='block text-xl text-[rgba(27,26,26,0.80)] font-semibold mb-4' htmlFor="phone">Phone Number</label>
                            <input defaultValue={phone} className='block p-3 rounded-md w-full' type="tel" name="phone" id="phone" placeholder='Enter Phone Number' required />
                        </div>
                    </div>
                    {/* <div className='mt-6 flex gap-x-6 mt'>
                        <div className='w-full'>
                            <label className='block text-xl text-[rgba(27,26,26,0.80)] font-semibold mb-4' htmlFor="password">Password</label>
                            <input className='block p-3 rounded-md w-full' type="password" name="Password" id="password" placeholder='Enter Password' required />
                        </div>
                        <div className='w-full'>
                            <label className='block text-xl text-[rgba(27,26,26,0.80)] font-semibold mb-4' htmlFor="password">Confirm Password</label>
                            <input className='block p-3 rounded-md w-full' type="password" name="confirmPassword" id="password" placeholder='Confirm Password' required />
                        </div>
                    </div> */}
                        <div className='mt-6 w-full'>
                            <label className='block text-xl text-[rgba(27,26,26,0.80)] font-semibold mb-4' htmlFor="Photo">Photo</label>
                            <input defaultValue={photo} className='block p-3 rounded-md w-full' type="url" name="Photo" id="Photo" placeholder='Enter Photo URL' required />
                        </div>
                    <button className='font-Rancho text-2xl transition-all duration-300 hover:text-white hover:bg-[#331A15] text-[#331A15] mt-6 bg-[#D2B48C] border-2 border-[#331A15] rounded-md w-full py-3' type='submit'>Update</button>
                </form> 
            </div>
        </section>
    );
};

export default UserUpdate;