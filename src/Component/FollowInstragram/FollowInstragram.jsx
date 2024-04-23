import pic1 from '../../assets/cups/Rectangle 9.png'
import pic2 from '../../assets/cups/Rectangle 16.png'
import pic3 from '../../assets/cups/Rectangle 15.png'
import pic4 from '../../assets/cups/Rectangle 14.png'
import pic5 from '../../assets/cups/Rectangle 13.png'
import pic6 from '../../assets/cups/Rectangle 12.png'
import pic7 from '../../assets/cups/Rectangle 11.png'
import pic8 from '../../assets/cups/Rectangle 10.png'

const FollowInstragram = () => {

    const instragramPic = [pic1,pic2,pic3,pic4,pic5,pic6,pic7,pic8]

    return (
        <section className='max-w-[1320px] mx-auto my-32'>
            <p className='font-Raleway text-xl font-normal text-center'>Follow Us Now</p>
            <h1 className='text-6xl text-[#331A15] text-center mt-2 mb-12'>Follow on Instagram</h1>
            <div className='grid grid-cols-4 gap-6'>
            {
                instragramPic && instragramPic.map((pic,inx) => <div className='w-full' key={inx}>
                    <img src={pic} alt="" />
                </div>)
            }
            </div>
        </section>
    );
};

export default FollowInstragram;