import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";


const BookingInformation = () => {
    const {user} = useContext(AuthContext)
    const handleAddService = async e => {
        e.preventDefault();
        const form = e.target;
        const serviceImage = form.serviceImage.value;
        const serviceName = form.serviceName.value;
        const serviceArea = form.serviceArea.value;
        const serviceDescription = form.serviceDescription.value;
        const price = parseFloat(form.price.value);
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
            const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/addService`, servicedata)

            console.log(data);
        }
        catch (err) {
            console.log(err);
        }
    }
    return (
        <div className=" min-h-screen my-12">
            <div className="hero-content flex-col ">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Booking Information Service</h1>
                </div>
                <div className="card  w-full shadow-2xl bg-base-100">
                    <form onSubmit={handleAddService} className="card-body w-full">
                        {/* form row 1 */}
                        <div className="flex gap-4">
                            <div className="form-control w-1/2">
                                <label className="label">
                                    <span className="label-text">Service Photo Url</span>
                                </label>
                                <input type="text" name="serviceImage" placeholder="photoUrl" className="input input-bordered" required />
                            </div>
                            <div className="form-control w-1/2">
                                <label className="label">
                                    <span className="label-text">Service Name</span>
                                </label>
                                <input type="text" name="serviceName" placeholder="Service Name" className="input input-bordered" required />
                            </div>
                        </div>
                        {/* form row 2 */}
                        <div className="flex gap-4">
                            <div className="form-control w-1/2">
                                <label className="label">
                                    <span className="label-text">Service Area</span>
                                </label>
                                <input type="text" name="serviceArea" placeholder="Service Area" className="input input-bordered" required />
                            </div>
                            <div className="form-control w-1/2">
                                <label className="label">
                                    <span className="label-text">Description</span>
                                </label>
                                <input type="text" name="serviceDescription" placeholder="Description" className="input input-bordered" required />
                            </div>
                        </div>
                        {/* form row 3 */}
                        <div className="flex gap-4">
                            <div className="form-control w-1/2">
                                <label className="label">
                                    <span className="label-text">Price</span>
                                </label>
                                <input type="text" name="price" placeholder="Price" className="input input-bordered" required />
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
                            <button className="btn  bg-amber-500 text-white hover:bg-amber-600 ">Purchase Button</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingInformation;