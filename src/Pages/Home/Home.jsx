import Banner from "../../Component/Banner/Banner";
import Featuredsection from "../../Component/FeaturedSection/Featuredsection";
import FollowInstragram from "../../Component/FollowInstragram/FollowInstragram";
import OurProductSection from "../../Component/OurProductsection/OurProductSection";

const Home = () => {
    return (
        <>
            <Banner/>
            <Featuredsection/>
            <OurProductSection/>
            <FollowInstragram/>
        </>
    );
};

export default Home;