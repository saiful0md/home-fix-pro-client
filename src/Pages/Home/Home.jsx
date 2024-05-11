import { useLoaderData } from "react-router-dom";
import PopularServices from "../../components/PopularServices";
import Slider from "../../components/Slider";


const Home = () => {
    const allServices = useLoaderData();
    return (
        <div>
            <Slider></Slider>
            <PopularServices allServices={allServices}></PopularServices>
        </div>
    );
};

export default Home;