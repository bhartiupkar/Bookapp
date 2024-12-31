import React from 'react';
import Navbar from '../Navbar.jsx';
import Footer from '../Footer.jsx';
import { useForm } from "react-hook-form";

const Contact = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        // Refresh the page after submission
        reset();
    };

    return (
        <div className="flex flex-col min-h-screen">
            <div>
                <Navbar />
            </div>
            <div className="bg-slate-200 p-4 pt-32 flex justify-center">
                {/* Main content area */}
                <form onSubmit={handleSubmit(onSubmit)} className=''>
                    <div className='rounded-3xl px-16 bg-black'>
                        <ul>
                            <li className='py-4 px-2'>
                                <input 
                                    {...register("username", { required: "Username is required" })} 
                                    className='py-2 px-4 rounded-lg' 
                                    type="text" 
                                    placeholder='Username' 
                                />
                                {errors.username && <p className="text-red-500">{errors.username.message}</p>}
                            </li>
                            <li className='py-4 px-2'>
                                <input 
                                    {...register("Email", { required: "Email is required" })} 
                                    className='py-2 px-4 rounded-lg' 
                                    type="email" 
                                    placeholder='Email' 
                                />
                                {errors.Email && <p className="text-red-500">{errors.Email.message}</p>}
                            </li>
                            <li className='py-4 px-2'>
                                <input 
                                    {...register("number", { required: "Phone number is required" })} 
                                    className='py-2 px-4 rounded-lg' 
                                    type="number" 
                                    placeholder='Phone Number' 
                                />
                                {errors.number && <p className="text-red-500">{errors.number.message}</p>}
                            </li>
                            <li className='py-4 px-2'>
                                <input 
                                    {...register("concern")} 
                                    className='py-2 px-4 rounded-lg' 
                                    type="text" 
                                    placeholder='Concern' 
                                />
                            </li>
                            <li className='mx-16 my-4 relative bottom-4 h-8 border rounded-2xl flex justify-center bg-slate-200'>
                                <button type="submit">Submit</button>
                            </li>
                        </ul>
                    </div>
                </form>
            </div>
            <Footer />
        </div>
    );
};

export default Contact;
