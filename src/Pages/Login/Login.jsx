import { useContext } from "react";
import { FaGithub } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Login = () => {
    const { signIn, signinWithGoogle, signinWithGitHub } = useContext(AuthContext);
    const location = useLocation()
    const navigate = useNavigate()
    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const user = { email, password }
        signIn(email, password)
            .then(() => {
                Swal.fire({
                    title: "Success!",
                    text: 'Login Successfully',
                    icon: 'success',
                    confirmButtonText: 'OK'
                })
                form.reset()
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
        console.log(user);
    }
    // google sing in
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
        <div className=" min-h-screen bg-base-200 my-12">
            <div className="hero-content w-full p-4 lg:gap-4 gap-0 flex-col lg:flex-row-reverse">
                <div className="lg:w-1/2 lg:flex hidden">
                    <img className="rounded-lg  h-[600px] w-full object-cover" src="https://i.ibb.co/SNV7yvz/buckets-paint-floor-53876-63280.jpg" alt="" />
                </div>

                <div className="card rounded-lg  w-full lg:w-1/2  bg-base-100">
                    <div className="text-center my-8">
                        <h1 className="lg:text-5xl text-2xl font-bold">Login now!</h1>
                    </div>
                    <form onSubmit={handleLogin} className="p-8">
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
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-amber-500 text-white hover:bg-amber-600">Login</button>
                        </div>
                    </form>
                    <div>
                        <h2 className=" text-center  px-3 text-sm">Login with social accounts </h2>
                        <div className="flex gap-3 text-2xl justify-center items-center my-3">
                            <button onClick={handleGoogleLogin} className="w-10 h-10 rounded-full flex justify-center items-center bg-gray-200">
                                <FcGoogle className="text-xl "></FcGoogle>
                            </button>
                            <button  className="w-10 h-10 rounded-full flex justify-center items-center bg-gray-200">
                                <FaGithub className="text-xl"></FaGithub>
                            </button>
                        </div>
                        <p className="text-xs text-center sm:px-6 dark:text-gray-500 my-6">Don&apos;t have an account?
                            <Link to={'/register'} rel="noopener noreferrer" href="#" className="underline dark:text-gray-600 hover:text-blue-500">Register</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;