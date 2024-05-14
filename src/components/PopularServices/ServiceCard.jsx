import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
    const { serviceDescription, serviceImage, price, serviceName, serviceProvider, _id } = service
    return (
        <div className="card  bg-base-100 shadow-xl">
            <figure><img className='h-[400px] w-full' src={serviceImage} alt={serviceName} /></figure>
            <div className="card-body">
                <div className="avatar flex-col  gap-4">
                    <p className='text-xl font-semibold'>Service Provider:</p>
                    <div className="w-12 rounded-full">
                        <img src={serviceProvider.image} />
                    </div>
                    <p><span className='font-semibold'>Name:</span> {serviceProvider.name}</p>
                </div>
                <h2> <span className="font-semibold">Service Name:</span> {serviceName}</h2>
                <p title={serviceDescription}><span className='font-semibold'>Description:</span> {serviceDescription.substring(0, 80)}...</p>

                <p><span className='font-semibold'>Price:</span> ${price}</p>
                <div className="card-actions ">
                    <Link to={`/service/${_id}`} className="btn bg-amber-500 text-white hover:bg-amber-600 ">View Details</Link>
                </div>
            </div>
        </div>
    );
};
ServiceCard.propTypes = {
    service: PropTypes.object
}

export default ServiceCard;