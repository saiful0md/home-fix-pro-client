
import { Helmet } from "react-helmet-async";
import MeetOurTeam from "../../components/MeetOurTeam";
import OurPremiumClients from "../../components/OurPremiumClients/OurPremiumClients";
import PopularServices from "../../components/PopularServices/PopularServices";
import Reviwe from "../../components/Reviwe";
import Slider from "../../components/Slider";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>HomeFixPro | Home</title>
            </Helmet>
            <Slider></Slider>
            <PopularServices></PopularServices>
            <MeetOurTeam></MeetOurTeam>
            <Reviwe></Reviwe>
            <OurPremiumClients></OurPremiumClients>
        </div>
    );
};

export default Home;