import { Link } from 'react-router-dom';
import bg from '../../assets/more/11.png';
import { IoIosArrowRoundBack } from "react-icons/io";
import Swal from 'sweetalert2';
import { useContext } from 'react';
import { AuthContext } from '../../Context/AuthContextComponent';

const SignUp = () => {


    const { createUser , updateUser } = useContext(AuthContext)

    const handleSignUp = e => {
        e.preventDefault()
        const form = e.target;
        const firstName = form.firstName.value;
        const lastName = form.lastName.value;
        const fullName = firstName+' '+lastName;
        const email = form.email.value;
        const password = form.Password.value;
        const confirmPassword = form.confirmPassword.value;
        const phone = form.phone.value;
        const photo = form.Photo.value;

        if(password !== confirmPassword){
            return Swal.fire({
                customClass: {
                    popup: 'custom-font',
                    title: 'custom-font',
                    content: 'custom-font',
                    confirm: 'custom-font',
                    cancel: 'custom-font'
                  },
                icon: "error",
                title: "Oops...",
                text: "Password Does't Match!",
              });
        }
        createUser(email,password)
        .then( result => {
            updateUser(fullName,photo)
            .then(() => console.log('updateProfile',result))
            .catch(error => {
                return Swal.fire({
                    customClass: {
                        popup: 'custom-font',
                        title: 'custom-font',
                        content: 'custom-font',
                        confirm: 'custom-font',
                        cancel: 'custom-font'
                      },
                    icon: "error",
                    title: "Oops...",
                    text: `${error.message}`,
                  });
            })
            console.log(result);
            const createAt = result.user.metadata.creationTime;
            const lastSignInTime = result.user.metadata.lastSignInTime;
            const user = {email,password,fullName,phone,photo,createAt,lastSignInTime}
            if(!createAt){
                return Swal.fire({
                    customClass: {
                        popup: 'custom-font',
                        title: 'custom-font',
                        content: 'custom-font',
                        confirm: 'custom-font',
                        cancel: 'custom-font'
                      },
                    icon: "error",
                    title: "Oops...",
                    text: "Something Wrong",
                  });
            }
            fetch('http://localhost:5000/user',{
                method:'POST',
                headers:{
                    'content-type':'application/json'
                },
                body:JSON.stringify(user)
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.acknowledged){
                    return Swal.fire({
                        customClass: {
                            popup: 'custom-font',
                            title: 'custom-font',
                            content: 'custom-font',
                            confirm: 'custom-font',
                            cancel: 'custom-font'
                          },
                        icon: "success",
                        title: "Good Job!",
                        text: "User Create Successfully",
                      });
                }
            })
        })
        .catch(error => {
            return Swal.fire({
                customClass: {
                    popup: 'custom-font',
                    title: 'custom-font',
                    content: 'custom-font',
                    confirm: 'custom-font',
                    cancel: 'custom-font'
                  },
                icon: "error",
                title: "Oops...",
                text: `${error.message}`,
              });
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
                    <h1 className='text-5xl font-normal text-center'>Please Sign Up</h1>
                    <p className='max-w-[930px] text-[rgba(27,26,26,0.70)] font-normal text-lg text-center mx-auto font-Raleway mt-8'>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
                <form onSubmit={handleSignUp} className='font-Raleway w-full'>
                    <div className='mt-8 flex gap-x-6 mt'>
                        <div className='w-full'>
                            <label className='block text-xl text-[rgba(27,26,26,0.80)] font-semibold mb-4' htmlFor="firstName">First Name</label>
                            <input className='block p-3 rounded-md w-full' type="text" name="firstName" id="firstName" placeholder='First Name' required />
                        </div>
                        <div className='w-full'>
                            <label className='block text-xl text-[rgba(27,26,26,0.80)] font-semibold mb-4' htmlFor="lastName">Last Name</label>
                            <input className='block p-3 rounded-md w-full' type="text" name="lastName" id="lastName" placeholder='Last Name' required />
                        </div>
                    </div>
                    <div className='mt-6 flex gap-x-6 mt'>
                        <div className='w-full'>
                            <label className='block text-xl text-[rgba(27,26,26,0.80)] font-semibold mb-4' htmlFor="email">Email</label>
                            <input className='block p-3 rounded-md w-full' type="email" name="email" id="email" placeholder='Enter email'  required/>
                        </div>
                        <div className='w-full'>
                            <label className='block text-xl text-[rgba(27,26,26,0.80)] font-semibold mb-4' htmlFor="phone">Phone Number</label>
                            <input className='block p-3 rounded-md w-full' type="tel" name="phone" id="phone" placeholder='Enter Phone Number' required />
                        </div>
                    </div>
                    <div className='mt-6 flex gap-x-6 mt'>
                        <div className='w-full'>
                            <label className='block text-xl text-[rgba(27,26,26,0.80)] font-semibold mb-4' htmlFor="password">Password</label>
                            <input className='block p-3 rounded-md w-full' type="password" name="Password" id="password" placeholder='Enter Password' required />
                        </div>
                        <div className='w-full'>
                            <label className='block text-xl text-[rgba(27,26,26,0.80)] font-semibold mb-4' htmlFor="password">Confirm Password</label>
                            <input className='block p-3 rounded-md w-full' type="password" name="confirmPassword" id="password" placeholder='Confirm Password' required />
                        </div>
                    </div>
                        <div className='mt-6 w-full'>
                            <label className='block text-xl text-[rgba(27,26,26,0.80)] font-semibold mb-4' htmlFor="Photo">Photo</label>
                            <input className='block p-3 rounded-md w-full' type="url" name="Photo" id="Photo" placeholder='Enter Photo URL' required />
                        </div>
                    <button className='font-Rancho text-2xl transition-all duration-300 hover:text-white hover:bg-[#331A15] text-[#331A15] mt-6 bg-[#D2B48C] border-2 border-[#331A15] rounded-md w-full py-3' type='submit'>Sign Up</button>
                </form>
            </div>

            
        </section>
    );
};

export default SignUp;