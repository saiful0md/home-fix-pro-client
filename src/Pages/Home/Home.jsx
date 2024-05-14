
import { Helmet } from "react-helmet-async";
import PopularServices from "../../components/PopularServices/PopularServices";
import Slider from "../../components/Slider";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>HomeFixPro | Home</title>
            </Helmet>
            <Slider></Slider>
            <PopularServices></PopularServices>
        </div>
    );
};

export default Home;