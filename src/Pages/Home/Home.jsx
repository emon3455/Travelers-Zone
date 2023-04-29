import Header from "../../Components/Header";

const Home = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url("https://github.com/emon3455/demo-picture/blob/main/travel-images/bnr.jpg?raw=true")` }}>

            <div className="">
                <Header></Header>
            </div>
            
            <div className="w-screen  flex justify-around ">

                <div className="container mx-auto bg-white text-center">
                    <h2>helloii</h2>
                </div>

                <div className="container mx-auto bg-white text-center">
                    <h2>Hii</h2>
                </div>

            </div>

        </div>
    );
};

export default Home;