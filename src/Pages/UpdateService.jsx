import axios from "axios";
import { useContext } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../AuthProvider/AuthProvider";


const UpdateService = () => {
    const serviceData = useLoaderData()
    const { serviceDescription, serviceImage, price, serviceArea, serviceName, _id } = serviceData;
    const { user } = useContext(AuthContext);
    const navigate = useNavigate()
    const handleUpdate = async e => {
        e.preventDefault();
        const form = e.target;
        const serviceImage = form.serviceImage.value;
        const serviceName = form.serviceName.value;
        const serviceArea = form.serviceArea.value;
        const serviceDescription = form.serviceDescription.value;
        const price = form.price.value;
        const servicedata = {
            serviceImage,
            serviceName,
            serviceArea,
            serviceDescription,
            price,
            serviceProvider: {
                name: user.displayName,
                image: user.photoURL,
                email: user.email
            }
        }
        try {
            const { data } = await axios.put(`${import.meta.env.VITE_API_URL}/service/${_id}`, servicedata)
            if (data.modifiedCount > 0) {
                Swal.fire({
                    title: "Success!",
                    text: 'Added Successfully',
                    icon: 'success',
                    confirmButtonText: 'OK',
                })
                navigate('/manageService')
            } else if (data.modifiedCount === 0) {
                Swal.fire({
                    title: "Oops!",
                    text: 'No Edit Anything',
                    icon: 'warning',
                    confirmButtonText: 'try again'
                })
            }
            console.log(data);
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
        <div className=" min-h-screen my-12">
            <Link to={'/manageService'} className="w-8 h-8 flex items-center justify-center rounded-full bg-amber-500 text-white hover:bg-amber-600">
                <FaArrowLeft></FaArrowLeft>
            </Link>
            <div className="hero-content flex-col ">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Update Service</h1>
                </div>
                <div className="card  w-full shadow-2xl bg-base-100">
                    <form onSubmit={handleUpdate} className="card-body w-full">
                        {/* form row 1 */}
                        <div className="flex gap-4">
                            <div className="form-control w-1/2">
                                <label className="label">
                                    <span className="label-text">Service Photo Url</span>
                                </label>
                                <input type="text" name="serviceImage" defaultValue={serviceImage} placeholder="photoUrl" className="input input-bordered" required />
                            </div>
                            <div className="form-control w-1/2">
                                <label className="label">
                                    <span className="label-text">Service Name</span>
                                </label>
                                <input type="text" name="serviceName" defaultValue={serviceName} placeholder="Service Name" className="input input-bordered" required />
                            </div>
                        </div>
                        {/* form row 2 */}
                        <div className="flex gap-4">
                            <div className="form-control w-1/2">
                                <label className="label">
                                    <span className="label-text">Service Area</span>
                                </label>
                                <input type="text" name="serviceArea" defaultValue={serviceArea} placeholder="Service Area" className="input input-bordered" required />
                            </div>
                            <div className="form-control w-1/2">
                                <label className="label">
                                    <span className="label-text">Description</span>
                                </label>
                                <input type="text" name="serviceDescription" defaultValue={serviceDescription} placeholder="Description" className="input input-bordered" required />
                            </div>
                        </div>
                        {/* form row 3 */}
                        <div className="flex gap-4">
                            <div className="form-control w-1/2">
                                <label className="label">
                                    <span className="label-text">Price</span>
                                </label>
                                <input type="text" name="price" placeholder="Price" defaultValue={price} className="input input-bordered" required />
                            </div>
                            <div className="form-control w-1/2">
                                <label className="label">
                                    <span className="label-text">Provider Name</span>
                                </label>
                                <input type="text" name="providerName" disabled defaultValue={user.displayName} placeholder="Provider Name" className="input input-bordered" required />
                            </div>
                        </div>
                        {/* form row 4 */}
                        <div className="flex gap-4">
                            <div className="form-control w-1/2">
                                <label className="label">
                                    <span className="label-text">Provider Image</span>
                                </label>
                                <input type="text" name="ProviderImage" disabled defaultValue={user.photoURL} placeholder="Provider Image" className="input input-bordered" required />
                            </div>
                            <div className="form-control w-1/2">
                                <label className="label">
                                    <span className="label-text">Provider Email</span>
                                </label>
                                <input type="email" name="providerEmail" disabled defaultValue={user.email} placeholder="Provider Email" className="input input-bordered" required />
                            </div>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn  bg-amber-500 text-white hover:bg-amber-600 ">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateService;