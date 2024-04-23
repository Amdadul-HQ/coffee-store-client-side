import { useState } from 'react';
import bg from '../../assets/more/11.png';
import { Link, useLoaderData } from 'react-router-dom';
import { MdEdit , MdDelete } from "react-icons/md";
import Swal from 'sweetalert2';

const Dashboard = () => {

    const loadedUser = useLoaderData()
    const [user,setUser] = useState(loadedUser)

    const handleDeletUser = (id) => {
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
              confirmButton: "btn btn-success",
              cancelButton: "btn btn-danger",
              
              popup: 'custom-font',
              title: 'custom-font',
              content: 'custom-font',
              confirm: 'custom-font',
              cancel: 'custom-font'
            },
            buttonsStyling: false
          });
          swalWithBootstrapButtons.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, delete it!",
            cancelButtonText: "No, cancel!",
            reverseButtons: true
          }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/user/${id}`,{
                    method:'DELETE'
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if(data.deletedCount>0){
                           swalWithBootstrapButtons.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                        });
                    const newUser = user.filter(person => person._id !== id );
                    setUser(newUser)
                    }
                })
                
            } else if (
              /* Read more about handling dismissals below */
              result.dismiss === Swal.DismissReason.cancel
            ) {
              swalWithBootstrapButtons.fire({
                title: "Cancelled",
                text: "Your imaginary file is safe :)",
                icon: "error"
              });
            }
          });
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
            <div className="font-Raleway">
                <table className="table">
                    {/* head */}
                    <thead className='text-xl font-medium'>
                    <tr>
                        <th>Profile Picture</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone Number</th>
                        <th>Create Time</th>
                        <th>Last Login Time</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody className='text-base font-normal'>
                    {/* row 1 */}
                    {
                        user && user.map( person => <tr key={person._id}>
                            <td>
                            <div className="flex items-center gap-3">
                                <div className="avatar">
                                <div className="mask mask-squircle w-12 h-12">
                                    <img src={person.photo} alt="Avatar Tailwind CSS Component" />
                                </div>
                                </div>
                            </div>
                            </td>
                            <td>
                            {
                                person.fullName
                            }
                            <br/>
                            <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                            </td>
                            <td>{person.email}</td>
                            <td>
                            <button className="btn btn-ghost btn-xs">{person.phone}</button>
                            </td>
                            <td>{person.createAt}</td>
                            <td className='flex gap-x-3'>
                                <Link to='/userupdate' className='bg-[#3C393B] text-white p-3 rounded-lg text-xl flex justify-center items-center'><button><MdEdit/></button></Link>
                                <Link onClick={()=> handleDeletUser(person._id)} className='bg-[#EA4744] text-white p-3 rounded-lg text-xl flex justify-center items-center'><button><MdDelete/></button></Link>
                            </td>
                        </tr> )
                    }
                    </tbody>
                </table>
                </div>
            </div>
        </section>
    );
};

export default Dashboard;