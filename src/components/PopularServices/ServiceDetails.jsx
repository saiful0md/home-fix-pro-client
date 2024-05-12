import { Link, useLoaderData } from "react-router-dom";


const ServiceDetails = () => {
    const service = useLoaderData()
    const { service_description, service_image, service_name, service_provider, _id } = service
    console.log(service);
    return (
        <div>
            <div className="card lg:card-side bg-base-100 shadow-xl">
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
        </div>
    );
};

export default ServiceDetails;