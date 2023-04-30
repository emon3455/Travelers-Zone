import {useLoaderData} from "react-router-dom"

const Booking = () => {

    const destination = useLoaderData();
    console.log(destination);

    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url("https://github.com/emon3455/demo-picture/blob/main/travel-images/box-3.png?raw=true")` }}>
            <div className="hero-overlay bg-opacity-60 bg-black bg-blend-multiply"></div>
            <div className="p-2 container mx-auto flex flex-col md:flex-row justify-between gap-10">

                <div className="mt-16 w-full md:w-1/2 md:mt-0">
                    <h2 className="text-5xl text-white font-bold mb-5">
                        {destination.name}
                    </h2>
                    <p  className="text-lg text-white">
                        {destination.info}
                    </p>
                </div>
                <div className="space-y-2 bg-white p-4 rounded-lg">

                    <div className="">
                        <label className="text-gray-500 font-semibold text-lg " htmlFor="origin">Origin</label> <br />
                        <input className="bg-gray-100 px-2 py-1 rounded-sm text-2xl font-semibold w-full" type="text" name="origin" id="origin" placeholder="Your Location" />
                    </div>
                    <div className="">
                        <label className="text-gray-500 font-semibold text-lg" htmlFor="destination">Destination</label> <br />
                        <input disabled className="bg-gray-100 px-2 py-1 rounded-sm text-2xl font-semibold w-full" type="text" name="destination" id="destination" value={destination.name} />
                    </div>

                    <div className="flex justify-between gap-5">
                        <div className="">
                            <label className="text-gray-500 font-semibold text-lg" htmlFor="from"> From </label> <br />
                            <input className="bg-gray-100 rounded-lg px-2 py-1" type="date" name="from" id="from" />
                        </div>
                        <div className="">
                            <label className="text-gray-500 font-semibold text-lg" htmlFor="to"> To </label> <br />
                            <input className="bg-gray-100 rounded-lg px-2 py-1" type="date" name="to" id="to" />
                        </div>
                    </div>

                    <button className="btn btn-warning w-full font-semibold">
                        Start Booking
                    </button>

                </div>
               
            </div>

        </div>
    );
};

export default Booking;