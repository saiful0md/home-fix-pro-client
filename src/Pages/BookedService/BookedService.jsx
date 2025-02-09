import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../AuthProvider/AuthProvider";


const BookedService = () => {
    const { user } = useContext(AuthContext);
    const [booked, setBooked] = useState([])
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const getData = async () => {
        const serviceData = await axios.get(`${import.meta.env.VITE_API_URL}/booking/${user?.email}`)
        setBooked(serviceData.data)
    }
    useEffect(() => {
        getData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user.email])
    console.log(booked);

    return (
        <div className="my-12">
            <Helmet>
                <title>HomeFixPro | Booked-Service</title>
            </Helmet>
            <h2 className="text-2xl font-bold text-center mb-12">My Booked Services <span className="badge text-white bg-amber-500 rounded-full">{booked.length}</span></h2>
            {/* if data is not found */}
            {booked.length === 0 && <div className="flex gap-6 p-6 bg-base-200 flex-col items-center border-2 max-w-4xl mx-auto">
                <h2 className="text-4xl text-warning">Oops! </h2>
                <p className="text-lg text-info">It looks like the service you&apos;re trying to access hasn&apos;t been added yet.</p>
                <p className="text-xl text-accent">Please add the service to continue</p>
            </div>}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {
                    booked.map(service =>
                        <div key={service._id} className=" flex flex-col lg:flex-row items-center bg-red-100 bg-opacity-30 rounded-lg border-[15px]  border-amber-500 border-opacity-15 shadow-xl">
                            <figure><img className='lg:max-w-28 lg:ml-2 rounded-md' src={service.serviceImage} alt={service.serviceName} /></figure>
                            <div className="card-body">
                                <div>
                                    <p className=' font-semibold mb-4'>Service Provider:</p>
                                    <div className="w-10  rounded-full">
                                        <img className="rounded-full" src={service.serviceProvider.image} />
                                    </div>
                                    <div>
                                        <p><span className='font-semibold'>Name:</span> {service.serviceProvider.name}</p>
                                        <p><span className='font-semibold'>Email:</span> {service.serviceProvider.email}</p>
                                    </div>
                                </div>
                                <h2> <span className="font-semibold">Service Name:</span> {service.serviceName}</h2>

                                <p><span className='font-semibold'>Price:</span> ${service.price}</p>

                            </div>
                            <div className="lg:mr-4 mb-4 flex gap-4 lg:flex-col">
                                <span
                                    className={`badge h-7 font-semibold
                                 ${service.status === 'Pending' && 'bg-yellow-100/80 text-yellow-500'}
                                 ${service.status === 'Working' && 'bg-red-100/80 text-red-500'}
                                 ${service.status === 'Completed' && 'bg-green-100/80 text-green-500'}
                                 `}
                                >{service.status}</span>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default BookedService;