/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";


const Login = () => {

    const [error , setError] = useState("");
    const {signInUser} = useContext(AuthContext);


    const handleLoginSubmit=(e)=>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        signInUser(email,password)
        .then(res=>{
            const logedUser = res.user;
            console.log(logedUser);
        })
        .catch(er=>{
            setError(er.message);
        })
        
    }

    return (
        <div>
            <div className="flex justify-center mt-12">
                <div className="card w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLoginSubmit} className="card-body">
                        <h2 className="text-3xl font-bold text-center">Login</h2>
                        <p className="text-center text-red-600">{error && error}</p>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name="email" className="p-2 border-2 rounded-lg w-full" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="p-2 border-2 rounded-lg w-full" />
                            <label className="label">
                                <Link href="#" className="text-sky-600">Forgot password?</Link>
                            </label>
                        </div>

                        <button type="submit" className="btn btn-warning">Login</button>

                        <p className="text-center text-gray-600">
                            Don't have an Account? <Link className="text-sky-600" to="/register">Create an account</Link>
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
                    </form>
                </div>
            </div>


        </div>
    );
};

export default Login;