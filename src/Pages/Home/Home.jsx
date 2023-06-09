import { useEffect, useState } from "react";
import Slider from "../../Components/Slider";
import { Link } from "react-router-dom";

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

                <h2 className="text-center text-4xl text-white font-bold mt-20  mb-10">Select Your destination and Travel With us!!!</h2>
                <div className="p-2 my-4">
                    <Slider key={destinations.length} destinations= {destinations.slice(0,4)}></Slider>
                </div>

                <Link className="btn btn-warning" to="/destinations">See More Locations</Link>

            </div>

        </div>
    );
};

export default Home;