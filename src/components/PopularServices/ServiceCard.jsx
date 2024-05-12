import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
    const { service_description, service_image, service_name, service_provider, _id } = service
    return (
        <div className="card  bg-base-100 shadow-xl">
            <figure><img src={service_image} alt={service_name} /></figure>
            <div className="card-body">
                <h2 className="card-title">{service_name}</h2>
                <p>{service_description}</p>
                <p>service provider: <img src={service_provider.image} alt="ss" />   {service_provider.name}</p>

                <div className="card-actions justify-end">
                    <Link to={`/service/${_id}`} className="btn bg-amber-500 text-white hover:bg-amber-600 ">View Detail</Link>
                </div>
            </div>
        </div>
    );
};
ServiceCard.propTypes = {
    service: PropTypes.object
}

export default ServiceCard;