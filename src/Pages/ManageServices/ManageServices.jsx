import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";


const ManageServices = () => {
    const [services, setServices] = useState([])
    const { user } = useContext(AuthContext)
    useEffect(() => {
        const getData = async () => {
            const serviceData = await axios.get(`${import.meta.env.VITE_API_URL}/services/${user?.email}`)
            setServices(serviceData.data)
        }
        getData()
    }, [user?.email])
    console.log(services);
    return (
        <div className="my-12">
            {/* <h2 className="text-2xl font-bold text-center mb-12">Manage Services Data</h2> */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {
                    services.map(service =>
                        <div key={service._id} className=" flex flex-col lg:flex-row items-center bg-red-100 bg-opacity-30 rounded-lg border-[15px]  border-amber-500 border-opacity-15 shadow-xl">
                            <figure><img className='lg:max-w-28 lg:ml-2 rounded-md' src={service.serviceImage} alt={service.serviceName} /></figure>
                            <div className="card-body">
                                <div>
                                    <p className=' font-semibold mb-4'>Service Provider:</p>
                                    <div className="avatar flex items-center gap-4">
                                        <div className="w-12 rounded-full">
                                            <img src={service.serviceProvider.image} />
                                        </div>
                                        <p><span className='font-semibold'>Name:</span> {service.serviceProvider.name}</p>
                                    </div>
                                </div>
                                <h2> <span className="font-semibold">Service Name:</span> {service.serviceName}</h2>
                                <p title={service.serviceDescription}><span className='font-semibold'>Description:</span> {service.serviceDescription.substring(0, 20)}...</p>

                                <p><span className='font-semibold'>Price:</span> ${service.price}</p>
                                <div className="card-actions justify-end">
                                    {/* <Link to={`/service/${_id}`} className="btn bg-amber-500 text-white hover:bg-amber-600 ">View Details</Link> */}
                                </div>
                            </div>
                            <div className="lg:mr-4 mb-4 flex gap-4 lg:flex-col">
                                <button className="btn bg-amber-500 text-white hover:bg-amber-600">update</button>
                                <button className="btn bg-red-600 text-white hover:bg-red-700">delete</button>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default ManageServices;