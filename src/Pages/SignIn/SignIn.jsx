import { Link } from 'react-router-dom';
import bg from '../../assets/more/11.png';
import { IoIosArrowRoundBack } from 'react-icons/io';
import { useContext } from 'react';
import { AuthContext } from '../../Context/AuthContextComponent';
import Swal from 'sweetalert2';

const SignIn = () => {

    const { signIn } = useContext(AuthContext)

    
    const handleSignIn = e => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.Password.value;
        
        signIn(email,password)
        .then(result => {
            console.log(result);
            const lastSignInTime = result.user.metadata.lastSignInTime;
            const user = {
                email,
                lastSignInTime
            }
            fetch('http://localhost:5000/user',{
                method:'PATCH',
                headers:{
                    'content-type':'application/json'
                },
                body:JSON.stringify(user)
            })
            .then(result => {
                console.log(result);
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
                    text: "Successfully Log In",
                  });
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
            <div className='max-w-[720px] mx-auto bg-[#F4F3F0] rounded-md px-28 py-16 mb-20'>
                    <h1 className='text-5xl font-normal text-center'>Please Sign In</h1>
                    <p className='max-w-[930px] text-[rgba(27,26,26,0.70)] font-normal text-lg text-center mx-auto font-Raleway mt-8'>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. </p>
                <form onSubmit={handleSignIn} className='font-Raleway w-full'>
                    
                    <div className='mt-6 flex gap-x-6 mt'>
                        <div className='w-full'>
                            <label className='block text-xl text-[rgba(27,26,26,0.80)] font-semibold mb-4' htmlFor="email">Email</label>
                            <input className='block p-3 rounded-md w-full' type="email" name="email" id="email" placeholder='Enter email'  required/>
                        </div>
                    </div>
                    <div className='mt-6 flex gap-x-6 mt'>
                        <div className='w-full'>
                            <label className='block text-xl text-[rgba(27,26,26,0.80)] font-semibold mb-4' htmlFor="password">Password</label>
                            <input className='block p-3 rounded-md w-full' type="password" name="Password" id="password" placeholder='Enter Password' required />
                        </div>
                    </div>
                    <button className='font-Rancho text-2xl transition-all duration-300 hover:text-white hover:bg-[#331A15] text-[#331A15] mt-6 bg-[#D2B48C] border-2 border-[#331A15] rounded-md w-full py-3' type='submit'>Sign In</button>
                </form>
            </div>

            
        </section>
    );
};

export default SignIn;