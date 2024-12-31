import React from 'react'
// import list from 
export default function Cards( {item}) {
    return (
        <>
            <div className=' mt-4 my-3 p-3' >
                <div className=" card bg-base-100 w-98 shadow-xl hover:scale-105 duration-100 dark:bg-slate-700 dark:text-white">
                    <figure>
                        <img
                            src={item.image}
                            alt="Book" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            {item.name}
                            <div className="badge badge-secondary">NEW</div>
                        </h2>
                        <p>{item.title}</p>
                        <div className="card-actions justify-between">
                            <div className="badge badge-outline">{item.price} $</div>
                            <div className="badge badge-outline hover:bg-pink-300 hover:text-white  hover:w-26 duration-200">Buy Now</div>
                        </div>
                    </div>
                </div>





            </div>
        </>
    )
}
