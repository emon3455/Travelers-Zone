import { Link } from "react-router-dom";
import Header from "../../Components/Header";


const Register = () => {
    return (
        <div>
            <Header></Header>

            <div className="flex flex-col justify-center items-center">
                <div className="card w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h2 className="text-3xl font-bold text-center">Register</h2>
                        <div className="">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="name" className="input input-bordered w-full" />
                        </div>
                        <div className="w-full">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="w-full input input-bordered" />
                        </div>
                        <div className="w-full">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="name" placeholder="password" className="w-full input input-bordered" />
                        </div>

                        <button className="btn btn-warning">Register</button>

                        <p className="text-center text-gray-600">
                            Already have an Account? <Link className="text-sky-600" to="/login">Login</Link>
                        </p>

                        <p className="text-center font-bold">
                            OR
                        </p>

                        <div className="w-full flex justify-between btn btn-ghost mb-2 bg-gray-100">
                            <img className="h-6 w-6" src="https://github.com/emon3455/demo-picture/blob/main/travel-images/google.png?raw=true" alt="" />
                            <span>Continue with Google</span>
                        </div>
                        <div className="w-full flex justify-between btn btn-ghost bg-gray-100">
                            <img className="h-6 w-6" src="https://github.com/emon3455/demo-picture/blob/main/travel-images/fb.png?raw=true" alt="" />
                            <span>Continue with Facebook</span>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Register;