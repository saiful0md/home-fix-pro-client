import { Link, useLoaderData } from "react-router-dom";


const ServiceDetails = () => {
    const service = useLoaderData()
    const { serviceDescription, serviceImage, price, serviceArea, serviceName, serviceProvider, _id } = service
    return (
        <div className="card lg:flex-row-reverse lg:items-center bg-base-100 shadow-xl my-12">
          <div className="lg:w-1/2">
              <figure><img className="rounded-lg" src={serviceImage} alt={serviceName} /></figure>
          </div>
            <div className="card-body space-y-2 lg:w-1/2">
                <div className="avatar flex-col  gap-4">
                    <p className='text-xl font-semibold'>Service Provider:</p>
                    <div className="w-12 rounded-full">
                        <img src={serviceProvider.image} />
                    </div>
                    <p><span className='font-semibold'>Name:</span> {serviceProvider.name}</p>
                </div>
                <p><span className="font-semibold">Location:</span> {serviceArea}</p>
                <h2> <span className="font-semibold">Service Name:</span> {serviceName}</h2>
                <p><span className='font-semibold'>Description:</span> {serviceDescription}</p>

                <p><span className='font-semibold'>Price:</span> ${price}</p>
                <div className="card-actions ">
                    <Link to={`/service/${_id}`} className="btn bg-amber-500 text-white hover:bg-amber-600 ">Booking Now</Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;