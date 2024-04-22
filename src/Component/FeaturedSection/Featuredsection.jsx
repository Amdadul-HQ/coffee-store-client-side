import pic1 from '../../assets/icons/1.png'
import pic2 from '../../assets/icons/2.png'
import pic3 from '../../assets/icons/3.png'
import pic4 from '../../assets/icons/4.png'
const Featuredsection = () => {

    const feature = [
        {   
            id:1,
            title:'Awesome Aroma',
            dis:'You will definitely be a fan of the design & aroma of your coffee',
            img: pic1
        },
        {   
            id:2,
            title:'High Quality',
            dis:'We served the coffee to you maintaining the best quality will definitely be a fan of the design & aroma of your coffee',
            img: pic2
        },
        {   
            id:3,
            title:'Pure Grades',
            dis:'The coffee is made of the green coffee beans which you will love',
            img: pic3
        },
        {   
            id:4,
            title:'Proper Roasting',
            dis:'Your coffee is brewed by first roasting the green coffee beans',
            img: pic4
        },
    ]

    return (
        <section className="bg-[#ECEAE3]">
            <div className="max-w-[1320px] py-14 mx-auto grid grid-cols-4 gap-x-4">
                {
                    feature.map(item => <div key={item.id}>
                        <img src={item.img} alt="" />
                        <h1 className='text-4xl font-normal mt-4'>{item.title}</h1>
                        <p className='font-Raleway text-base font-normal mt-2'>{item.dis}</p>
                    </div>)
                }
            </div>
        </section>
    );
};

export default Featuredsection;