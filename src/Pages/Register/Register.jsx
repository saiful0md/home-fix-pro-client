import { useContext, useState } from "react";
import { FaEye, FaEyeSlash, FaGithub } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../AuthProvider/AuthProvider";


const Register = () => {
    const { createUser, userInfoUpdate, setUser,signinWithGoogle } = useContext(AuthContext)
    const navigate = useNavigate()
    const [registerError, setRegisterError] = useState()
    const [showPass, setShowPass] = useState()
    const handleRegister = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photoUrl = form.photoUrl.value;
        const email = form.email.value;
        const password = form.password.value;
        const user = { name, photoUrl, email, password }
        if (password.length < 6) {
            setRegisterError("Password must have at least 6 characters long");
            return
        } else if (!/[a-z]/.test(password)) {
            setRegisterError("Password must have at least  one lowercase letter");
            return
        } else if (!/[A-Z]/.test(password)) {
            setRegisterError("Password must have at least one uppercase letter");
            return
        }
        createUser(email, password)
            .then(() => {
                userInfoUpdate(name, photoUrl)
                    .then(() => {
                        setUser({ ...user, photoURL: photoUrl, displayName: name })
                        Swal.fire({
                            title: "Success!",
                            text: 'Register Successfully',
                            icon: 'success',
                            confirmButtonText: 'OK'
                        })
                        form.reset()
                        navigate(location?.state || '/')

                    })
            })
            .catch(error => {
                Swal.fire({
                    title: 'Error!',
                    text: error.message,
                    icon: 'error',
                    confirmButtonText: 'try again'
                })
            })
        console.log(user);
    }
    const handleGoogleLogin = () => {
        signinWithGoogle()
            .then(() => {
                Swal.fire({
                    title: "Success!",
                    text: 'Login Successfully',
                    icon: 'success',
                    confirmButtonText: 'OK'
                })
                navigate(location?.state || '/')
            })
            .catch(error => {
                Swal.fire({
                    title: 'Error!',
                    text: error.message,
                    icon: 'error',
                    confirmButtonText: 'try again'
                })
            })
    }
    return (
        <div className=" min-h-screen bg-base-200">
            <div className="hero-content w-full p-4 lg:gap-4 gap-0 flex-col lg:flex-row">
                <div className="lg:w-1/2 lg:flex hidden">
                    <img className="rounded-lg  h-[750px] w-full object-cover" src="https://i.ibb.co/SNV7yvz/buckets-paint-floor-53876-63280.jpg" alt="" />
                </div>

                <div className="card rounded-lg  w-full lg:w-1/2  bg-base-100">
                    <div className="text-center my-8">
                        <h1 className="lg:text-5xl text-2xl font-bold">Register now!</h1>
                    </div>
                    <form onSubmit={handleRegister} className="p-8">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo Url</span>
                            </label>
                            <input type="text" name="photoUrl" placeholder="photo Url" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <div className="flex w-full relative ">
                                <input
                                    type={showPass ? 'text' : 'password'}
                                    name="password"
                                    placeholder="Password"
                                    className="input w-full input-bordered" required />
                                <span onClick={() => setShowPass(!showPass)} className="absolute top-4 right-3">
                                    {
                                        showPass ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>
                                    }
                                </span>
                            </div>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-amber-500 text-white hover:bg-amber-600">Register</button>
                        </div>
                        {registerError && <p className="text-red-600">{registerError}</p>}
                    </form>
                    <div>
                        <h2 className=" text-center px-3 text-sm">Register with social accounts </h2>
                        <div className="flex gap-3 text-2xl justify-center items-center my-3">
                            <button onClick={handleGoogleLogin} className="w-10 h-10 rounded-full flex justify-center items-center bg-gray-200">
                                <FcGoogle className="text-xl "></FcGoogle>
                            </button>
                            <button className="w-10 h-10 rounded-full flex justify-center items-center bg-gray-200">
                                <FaGithub className="text-xl"></FaGithub>
                            </button>
                        </div>
                        <p className="text-xs text-center sm:px-6 dark:text-gray-500 my-6">You have an account?
                            <Link to={'/register'} rel="noopener noreferrer" href="#" className="underline dark:text-gray-600 hover:text-blue-500">Login</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;