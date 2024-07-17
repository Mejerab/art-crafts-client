import { useContext, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";

const LogIn = () => {
    const navigate = useNavigate();
    const [show, setShow] = useState(false);
    const { logIn, googleLogin, githubLogin } = useContext(AuthContext);
    const location = useLocation();
    console.log(location);
    const handleSubmit = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
            toast.error('Email is not valid');
        }
        else {
            logIn(email, password)
                .then(result => {
                    console.log(result.user);
                    Swal.fire({
                        title: 'Success!',
                        text: 'Do you want to continue',
                        icon: 'success',
                        confirmButtonText: 'Return'
                    })
                    navigate(location?.state ? location.state : '/');
                })
                .catch(error => {
                    console.error(error);
                    Swal.fire({
                        title: 'error!',
                        text: "We faced an error",
                        icon: 'error',
                        confirmButtonText: 'Try Again'
                    })
                })
        }
    }
    const handleGoogle = () => {
        googleLogin()
            .then(result => {
                console.log(result.user);
                Swal.fire({
                    title: 'Success!',
                    text: 'Do you want to continue',
                    icon: 'success',
                    confirmButtonText: 'Return'
                })
                navigate(location?.state ? location.state : '/');
            })
            .catch(error => {
                console.error(error);
                Swal.fire({
                    title: 'error!',
                    text: "We faced an error",
                    icon: 'error',
                    confirmButtonText: 'Try Again'
                })
            })
    }
    const handleFacebook = () => {
        githubLogin()
            .then(result => {
                console.log(result.user);
                navigate(location?.state ? location.state : '/');
            })
            .catch(error => console.error(error))
    }
    return (
        <div>
            <h3 className="text-3xl text-center text-[#954535cc] font-bold mt-5 pb-2">Login</h3>
            <div className="border w-4/6 xl:w-[35%] mx-auto py-8 my-8 rounded-2xl">
                <form onSubmit={handleSubmit} className="mx-auto w-3/4">
                    <h4>Email</h4>
                    <input type="text" placeholder="email" name="email" className="input input-bordered w-full mb-2 mt-1" />
                    <h4>Password</h4>
                    <div className="relative">
                        <input type={show ? 'text' : 'password'} placeholder="password" name="password" className="input input-bordered w-full mb-2 mt-1" />
                        <span onClick={() => setShow(!show)}>
                            {
                                show ? <FiEye className="text-xl absolute top-[17px] right-3" /> : <FiEyeOff className="text-xl absolute top-[17px] right-3" />
                            }
                        </span>
                    </div>
                    <button className="btn mt-3 text-white bg-[#95453590] w-full">
                        Login</button>
                </form>
                <p className="text-center mt-3">Don't have an account? <Link to='/register' className="font-bold text-[#95453590]">Register</Link></p>
                <div className="flex items-center justify-center my-3">
                    <div className="w-[50px] h-[1px] bg-gray-500"></div>
                    <div className="text-lg font-semibold mx-2">Or</div>
                    <div className="w-[50px] h-[1px] bg-gray-500"></div>
                </div>
                <div className="font-sans flex flex-col mx-16 gap-y-4">
                    <button onClick={handleGoogle} className="btn"><FcGoogle className="text-2xl"></FcGoogle>Continue with Google</button>
                    <button onClick={handleFacebook} className="btn"><FaGithub className="text-2xl" />Continue with Github</button>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default LogIn;