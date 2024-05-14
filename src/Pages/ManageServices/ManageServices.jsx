
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../AuthProvider/AuthProvider";


const ManageServices = () => {
    const [services, setServices] = useState([])
    const { user } = useContext(AuthContext)
    const getData = async () => {
        const serviceData = await axios.get(`${import.meta.env.VITE_API_URL}/services/${user?.email}`)
        setServices(serviceData.data)
    }
    useEffect(() => {
        getData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ user.email])

    const handleDelete = async id => {
        try {
            const { data } = await axios.delete(`${import.meta.env.VITE_API_URL}/service/${id}`)
            console.log(data);
            if (data.deletedCount) {
                Swal.fire({
                    title: "Are you sure?",
                    text: "You won't be able to revert this!",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "Yes, delete it!"
                }).then((result) => {
                    if (result.isConfirmed) {
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                        });
                        getData()
                    }
                });
            }
        }
        catch (err) {
            console.log(err);
            Swal.fire({
                title: "Oops!",
                text: err.message,
                icon: 'error',
                confirmButtonText: 'try again'
            })
        }
    }
    return (
        <div className="my-12">
            <h2 className="text-2xl font-bold text-center mb-12">Manage My Services <span className="badge text-white bg-amber-500 rounded-full">{services.length}</span></h2>
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

                            </div>
                            <div className="lg:mr-4 mb-4 flex gap-4 lg:flex-col">
                                <Link to={`/updateService/${service._id}`}>
                                    <button
                                        className="btn btn-sm bg-amber-500 text-white hover:bg-amber-600"
                                    >
                                        <FaEdit></FaEdit>
                                    </button>
                                </Link>
                                <button
                                    onClick={() => handleDelete(service._id)}
                                    className="btn btn-sm bg-red-600 text-white hover:bg-red-700"
                                >
                                    <MdDelete></MdDelete>
                                </button>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default ManageServices;