import { Link } from "react-router-dom";
import { SlCup } from "react-icons/sl";
import { IoEyeSharp } from "react-icons/io5";
import { MdEdit, MdDelete } from "react-icons/md";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
// import pic1 from '../../assets/more/4.png'
// import pic2 from '../../assets/more/5.png'
const OurProductSection = () => {
    const [coffeeStore, setCoffeeStore] = useState([]);



    useEffect(()=>{
        fetch('http://localhost:5000/coffee')
        .then(res=> res.json())
        .then(data => {
           
            setCoffeeStore(data)
        })
    },[])
    const handleDeleteCoffee = id => {
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
                fetch(`http://localhost:5000/coffee/${id}`,{
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
                    const newCoffeeStore = coffeeStore.filter(coffee => coffee._id !== id );
                    setCoffeeStore(newCoffeeStore)
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
        <section className="mt-[120px] relative">
            {/* <img className="absolute top-0 left-0" src={pic1} alt="" />
            <img className="absolute bottom-0 right-0" src={pic2} alt="" /> */}
            <div className="text-center mb-12 flex flex-col items-center">
                <p className="font-Raleway font-normal text-xl text-[#1B1A1A] mb-2">--- Sip & Savor ---</p>
                <h1 className="text-[#331A15] text-6xl font-normal">Our Popular Products</h1>
                <Link to='/addcoffee'><button className="hover:text-[#331A15] hover:bg-transparent transition-all duration-300 flex items-center py-2 mt-4 px-5 text-2xl gap-x-2 text-white bg-[#E3B577] border-[#331A15] border-2 rounded-md">Add Coffee <SlCup/></button></Link>
            </div>
            <div className="grid grid-cols-2 gap-6 max-w-[1320px] mx-auto">
                {
                    coffeeStore && coffeeStore.map( coffee => <div className="flex items-center justify-between bg-[#F5F4F1] rounded-xl p-5" key={coffee._id}>    
                        <div>
                            <img className="w-[185px] h-[240px]" src={coffee.photo} alt="" />
                        </div>
                        <div className="font-Raleway">
                            <p className="text-[#5C5B5B] text-xl font-normal"><span className="text-[#1B1A1A] text-xl font-semibold">Name:</span> {coffee.coffeeName}</p>
                            <p className="text-[#5C5B5B] text-xl font-normal"><span className="text-[#1B1A1A] text-xl font-semibold">Chef:</span> {coffee.chefName}</p>
                            <p className="text-[#5C5B5B] text-xl font-normal"><span className="text-[#1B1A1A] text-xl font-semibold">Price:</span> {coffee.price} Taka</p>
                        </div>
                        <div className="flex flex-col justify-around gap-6 font-Raleway">
                            <Link to={`/coffee/${coffee._id}`} className="bg-[#D2B48C] p-3 text-white text-2xl rounded-xl"><IoEyeSharp/></Link>
                            <Link to={`/updatecoffee/${coffee._id}`} className="bg-[#3C393B] p-3 text-white text-2xl rounded-xl"><MdEdit/></Link>
                            <Link onClick={()=> handleDeleteCoffee(coffee._id)} className="bg-[#EA4744] font-Raleway p-3 text-white text-2xl rounded-xl"><MdDelete/></Link>
                        </div>
                    </div> )
                }
            </div>
        </section>
    );
};

export default OurProductSection;