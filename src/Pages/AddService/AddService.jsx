

const AddService = () => {
    return (
        <div>
            <div className=" min-h-screen bg-base-200">
                <div className="hero-content flex-col ">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Add Service</h1>
                    </div>
                    <div className="card  w-full shadow-2xl bg-base-100">
                        <form className="card-body w-full">
                            <div className="flex gap-4">
                                <div className="form-control w-1/2">
                                    <label className="label">
                                        <span className="label-text">Service Photo Url</span>
                                    </label>
                                    <input type="text" placeholder="photoUrl" className="input input-bordered" required />
                                </div>
                                <div className="form-control w-1/2">
                                    <label className="label">
                                        <span className="label-text">Service Name</span>
                                    </label>
                                    <input type="text" name="serviceName" placeholder="Service Name" className="input input-bordered" required />
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="form-control w-1/2">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" placeholder="email" className="input input-bordered" required />
                                </div>
                                <div className="form-control w-1/2">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" placeholder="password" className="input input-bordered" required />
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="form-control w-1/2">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" placeholder="email" className="input input-bordered" required />
                                </div>
                                <div className="form-control w-1/2">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" placeholder="password" className="input input-bordered" required />
                                </div>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddService;