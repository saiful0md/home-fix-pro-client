import axios from "axios";
import { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ImCross } from "react-icons/im";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../AuthProvider/AuthProvider";
const ServiceDetails = () => {
    const navigate = useNavigate()
    const [startDate, setStartDate] = useState(new Date());
    const { user } = useContext(AuthContext)
    const service = useLoaderData()
    const [showModal, setShowModal] = useState(false)
    const { serviceDescription, serviceImage, price, serviceArea, serviceName, serviceProvider, _id } = service;


    const handleBookedService = async e => {
        e.preventDefault();
        if(user?.email === serviceProvider.email){
            Swal.fire({
                title: 'Error!',
                text: 'You are a Provider',
                icon: 'error',
                confirmButtonText: 'try again'
            })
            return
        }
        const form = e.target;
        const serviceId = form.serviceId.value;
        const serviceName = form.serviceName.value;
        const serviceImage = form.serviceImage.value;
        const serviceArea = form.serviceArea.value;
        const dateData = startDate;
        const userName = form.userName.value;
        const userEmail = form.userEmail.value;
        const price = form.price.value;
        const servicedata = {
            serviceId,
            serviceName,
            serviceImage,
            serviceArea,
            price,
            dateData,
            userEmail,
            userName,
            serviceProvider
        }
        console.log(servicedata);
        try{
            const {data} = await axios.post(`${import.meta.env.VITE_API_URL}/booking`, servicedata)
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    title: "Success!",
                    text: 'Booked Successfully',
                    icon: 'success',
                    confirmButtonText: 'OK'
                })
                navigate('/serviceToDo')
            }
        }
        catch(err){
            console.log(err);
        }

    }
    return (
        <div className="relative">
            <div className="card lg:flex-row-reverse lg:items-center bg-base-100 shadow-xl my-12">
                <div className="lg:w-1/2">
                    <figure><img className="rounded-lg" src={serviceImage} alt={serviceName} /></figure>
                </div>
                <div className="card-body space-y-2 lg:w-1/2">
                    <div className="avatar flex-col  gap-1">
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
                        <button
                            onClick={() => setShowModal(true)}
                            className="btn bg-amber-500 text-white hover:bg-amber-600 ">Booking Now</button>
                    </div>
                </div>
            </div>
            {/* modal with form*/}
            {showModal && <div className=" inset-0 absolute w-full z-10 ">
                <div className="hero-content flex-col ">
                    <div className="card  w-full shadow-2xl bg-base-100">
                        <div onClick={() => { setShowModal(false) }} className="cursor-pointer bg-rose-600 hover:bg-rose-700 w-8 h-8 flex items-center justify-center rounded-full ml-6 mt-6">
                            <ImCross className="text-white"></ImCross>
                        </div>
                        <h1 className="lg:text-5xl text-2xl font-bold  text-center">Book Now</h1>
                        <form onSubmit={handleBookedService} className="card-body w-full">
                            <div className="flex flex-col gap-6 lg:flex-row">
                                {/* form col 1 */}
                                <div className="flex flex-col lg:w-1/2 gap-1">
                                    <div className="form-control ">
                                        <label className="label">
                                            <span className="label-text">Service Id</span>
                                        </label>
                                        <input type="text" name="serviceId" readOnly defaultValue={_id} placeholder="" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control ">
                                        <label className="label">
                                            <span className="label-text">Service Name</span>
                                        </label>
                                        <input type="text" name="serviceName" readOnly defaultValue={serviceName} placeholder="Service Name" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control ">
                                        <label className="label">
                                            <span className="label-text">Service Photo</span>
                                        </label>
                                        <input type="text" name="serviceImage" readOnly defaultValue={serviceImage} placeholder="Photo Url" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control ">
                                        <label className="label">
                                            <span className="label-text">Provider Email</span>
                                        </label>
                                        <input type="email" name="providerEmail" readOnly defaultValue={serviceProvider.email} placeholder="Provider Email" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control ">
                                        <label className="label">
                                            <span className="label-text">Provider Name</span>
                                        </label>
                                        <input type="text" name="providerName" readOnly defaultValue={serviceProvider.name} placeholder="Provider Name" className="input input-bordered" required />
                                    </div>
                                </div>
                                {/* form col 2 */}
                                <div className="flex flex-col lg:w-1/2 gap-1">
                                    <div className="form-control ">
                                        <label className="label">
                                            <span className="label-text">User Name</span>
                                        </label>
                                        <input type="text" name="userName" readOnly defaultValue={user.displayName} placeholder="user Name" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control ">
                                        <label className="label">
                                            <span className="label-text">User Email</span>
                                        </label>
                                        <input type="text" name="userEmail" readOnly defaultValue={user.email} placeholder="UserName" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control ">
                                        <label className="label">
                                            <span className="label-text">Price</span>
                                        </label>
                                        <input type="text" name="price" readOnly defaultValue={'$' + price} placeholder="Price" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control ">
                                        <label className="label">
                                            <span className="label-text">Service Area</span>
                                        </label>
                                        <input type="text" name="serviceArea" defaultValue={serviceArea} placeholder="Service Area" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control ">
                                        <label className="label">
                                            <span className="label-text">Service Taking Date</span>
                                        </label>
                                        <DatePicker className="p-3 border rounded-lg shadow-sm lg:w-[550px]" selected={startDate} onChange={(date) => setStartDate(date)} />
                                    </div>
                                </div>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn  bg-amber-500 text-white hover:bg-amber-600 ">Purchase</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>}
        </div>
    );
};

export default ServiceDetails;