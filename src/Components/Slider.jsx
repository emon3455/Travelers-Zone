/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import {Link, useNavigate} from "react-router-dom"

const Slider = (props) => {

    const destinations = props.destinations;

    const navigate  =  useNavigate();

    const handleBook = (id) =>{
        navigate(`/booking/${id}`);
    }

    return (
        <div >

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {
                    destinations.map(des=>
                    <div onClick={()=>handleBook(des.id)} className="relative cursor-pointer hover:-translate-y-1 hover:scale-110 duration-500" key={des.id}>
                        <img className="border-2 border-orange-400 h-80 w-52 rounded-2xl" src={des.image} alt="" />
                        <h2 className="text-white absolute bottom-5 left-4 font-semibold text-3xl mb-2">{des.name}</h2>
                    </div>
                    )
                }
            </div>
        </div>
    );
};

export default Slider;