import PropTypes from 'prop-types';
import { Fade } from 'react-awesome-reveal';

const PopularServices = ({allServices}) => {
    console.log(allServices);
    return (
        <div>
            <div>
                <Fade direction="left">
                    <h2 className="text-4xl font-bold text-center my-8">Popular Services</h2>
                </Fade>
                <Fade direction="right">
                    <p className="text-center my-5">Artisanal Elegance: Hand-Painted Ceramic Vase, Elevating Every Corner of Your Home.</p>
                </Fade>
            </div>          
        </div>
    );
};
PopularServices.propTypes ={
    allServices: PropTypes.array
}
export default PopularServices;