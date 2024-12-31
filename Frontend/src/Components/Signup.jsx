import React from 'react'
import { useForm } from "react-hook-form"
import { Link } from 'react-router-dom'
import Login from './Login'
function Signup() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        console.log(data);
        // alert(JSON.stringify(data)); // Confirm submission
    };

    return (
        <div className=''>
            <div className="flex h-screen items-center justify-center">
                <div className="w-1/3 shadow-lg shadow-yellow-950 p-2 bg-slate-600 modal-box">
                    <form onSubmit={handleSubmit(onSubmit)} className=''>
                        <Link to={'/'} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 dark:text-black">✕</Link>
                        <div className='flex justify-center pb-3'>
                            <h3 className="font-bold text-3xl text-gray-400 pb-3">SignUp</h3>
                        </div>
                        <div className='mt-2 space-y-3 pl-4 mb-2'>
                            <div>
                                <input {...register("email", { required: "Email is required" })} type="email" className="outline-none h-8 rounded-lg w-3/4" placeholder="  Email" />
                                {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                            </div>
                            <div>
                                <input {...register("name", { required: "Name is required" })} type="text" className="outline-none h-8 rounded-lg w-3/4" placeholder="  Full Name" />
                                {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                            </div>
                            <div className='mt-3'>
                                <input {...register("password", { required: "Password is required" })} type="password" className="h-8 outline-none rounded-lg w-1/2" placeholder="  Create Password" />
                                {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
                            </div>
                            <div className='mt-3'>
                                <input {...register("confirmPassword", { required: "Confirm Password is required" })} type="password" className="h-8 outline-none rounded-lg w-1/2" placeholder="  Confirm Password" />
                                {errors.confirmPassword && <p className='text-red-500'>{errors.confirmPassword.message}</p>}
                            </div>
                        </div>
                        <div>
                            <div className="flex justify-center">
                                <button type='submit' className='bg-black text-white h-10 w-60 rounded-3xl'>Submit</button>
                            </div>
                            <div className='flex justify-end'>
                                <p className='text-sky-50'>Already have an account? <span className='text-red-200 font-semibold'>???</span> <Link to={'/'} className='text-green-300'onClick={()=>{document.getElementById('my_modal_3').showModal()}}>Login</Link></p>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
                        <Login/>
        </div>
    )
}

export default Signup;
