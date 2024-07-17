import { useContext, useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";

const Register = () => {
    const [show, setShow] = useState(false);
    const { createWithEmail, updateUser } = useContext(AuthContext);
    const handleSubmit = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
            toast.error('Email is not valid');
        }
        else if (password.length < 6) {
            toast.error('Password must contain 6 characters');
        }
        else if (!/^(?=.*[a-z])(?=.*[A-Z]).+$/.test(password)) {
            toast.error('Password must contain an Uppercase & lowarcase');
        }
        else {
            createWithEmail(email, password)
                .then(result => {
                    console.log(result.user);
                    Swal.fire({
                        title: 'Success!',
                        text: 'Do you want to continue',
                        icon: 'success',
                        confirmButtonText: 'Return'
                    })
                    updateUser(name, photo)
                        .then(() => {
                            console.log('Update successful');
                        })
                        .catch(error => console.error(error))
                        window.location = window.location.href = '/';
                })
                .catch(error => {
                    console.error(error)
                    Swal.fire({
                        title: 'error!',
                        text: "We faced an error",
                        icon: 'error',
                        confirmButtonText: 'Try Again'
                    })
                })
        }
    }
    return (
        <div>
            <h3 className="text-3xl text-center font-bold mt-5 pb-2">Register</h3>
            <div className="border w-4/6 xl:w-[35%] mx-auto py-8 my-8 rounded-2xl">
                <form onSubmit={handleSubmit} className="mx-auto w-3/4">
                    <h4>Name</h4>
                    <input type="text" placeholder="name" name="name" className="input input-bordered w-full mb-2 mt-1" />
                    <h4>Photo</h4>
                    <input type="text" placeholder="photo URL" name="photo" className="input input-bordered w-full mb-2 mt-1" />
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
                    <button className="btn mt-3 text-white bg-[#95453590] w-full">Register</button>
                </form>
                <p className="text-center mt-3">Already have an account? <Link to='/login' className="font-bold text-[#95453590]">Login</Link></p>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Register;