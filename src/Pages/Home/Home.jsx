import { useEffect, useState } from "react";
import Slider from "../../Components/Slider";

const Home = () => {

    const [ destinations , setDestinations] = useState([]);

    useEffect(()=>{
        fetch("https://travel-server-side-emon3455.vercel.app/destinations")
        .then(res=> res.json())
        .then(data=> setDestinations(data))
        .catch(er=>{
            console.log(er.message);
        })
    },[])

    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url("https://github.com/emon3455/demo-picture/blob/main/travel-images/box-3.png?raw=true")` }}>
            <div className="hero-overlay bg-opacity-60 bg-black bg-blend-multiply"></div>
            <div className="flex flex-col justify-center items-center">

                <h2 className="text-center text-4xl text-white font-bold mt-16 xl:mt-4  mb-10">Select Your destination and Travel With us!!!</h2>
                <div className="p-2">
                    <Slider key={destinations.length} destinations= {destinations}></Slider>
                </div>

            </div>

        </div>
    );
};

export default Home;