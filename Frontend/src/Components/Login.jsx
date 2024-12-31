import React from 'react'
import Signup from './Signup'
import { useForm } from "react-hook-form"
import { Link } from 'react-router-dom'

function Login() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        console.log(data);
        // alert(JSON.stringify(data)); // Added alert to confirm submission
    };

    const closeModal = () => {
        const modal = document.getElementById('my_modal_3');
        if (modal) {
            modal.close();
        }
    };

    return (
        <div>
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                    <form onSubmit={handleSubmit(onSubmit)} method='dialog'>
                        <div className='space-y-4'>
                            <div className='flex justify-between'>
                                <div className='text-3xl text-rose-700'>Login</div>
                                <Link to={'/'} className='text-slate-600 outline-none font-semibold text-2xl' onClick={closeModal}>✕</Link>
                            </div>

                            <div className='flex justify-between'>
                                <input {...register("email", { required: "Email is required" })}
                                    className='bg-gray-300 p-2 outline-none rounded-sm block w-3/5'
                                    type="email"
                                    placeholder="Enter your email"
                                />
                                {errors.email && <p className='text-red-500'>This Field is required</p>}
                            </div>
                            <input {...register("password", { required: "Password is required" })}
                                className='bg-gray-300 p-2 rounded-sm block w-1/2'
                                type="password"
                                placeholder="Enter your password"
                            />
                            {errors.password && <p className='text-red-500'>This field is required</p>}
                        </div>
                        <div className='flex justify-center'>
                            <button type='submit' className='w-1/2 mt-4 bg-slate-500 font-medium rounded p-1' >Submit</button>
                        </div>
                        <p className='dark:text-slate-900'>Not Registered {" "}
                            <Link to="/signup" className="underline text-blue-500 cursor-pointer" onClick={closeModal}>Signup</Link>
                        </p>
                    </form>
                </div>
            </dialog>
        </div>
    )
}

export default Login;
