import { useState } from "react";


const Slider = (props) => {

    const destinations = props.destinations;
    console.log(destinations);

    return (
        <div >

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {
                    destinations.map(
                        des=><div className="relative cursor-pointer hover:-translate-y-1 hover:scale-110 duration-500" key={des.id}>
                        
                            <img className="border-2 border-orange-400 h-80 w-52 rounded-2xl" src={des.image} alt="" />
                            <h2 className="absolute bottom-5 left-4 text-white font-semibold text-3xl">{des.name}</h2>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Slider;