/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const Contact = () => {

    return (
        <div className='mt-16 md:mt-4 flex flex-col md:flex-row justify-between items-center h-screen'>
            <div className=" w-full md:w-1/2 mx-auto card flex-shrink-0 max-w-sm shadow-2xl bg-base-100">
                <div className="card-body">
                    <h2  className="text-3xl text-center font-semibold">Let's Talk</h2>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input required type="email" id="email" placeholder="email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Message</span>
                        </label>
                        <textarea placeholder="Message" className="bg-gray-100 rounded-lg p-2 h-24" />
                    </div>

                    <div className="form-control mt-6">
                        <button className="btn btn-warning">Send</button>
                    </div>
                </div>
            </div>
            <div className="w-full md:w-1/2 p-4 mx-auto">
                <h2 className="text-3xl text-center font-semibold mb-4">Our Location</h2>
                <div>
                <iframe className="rounded-lg mb-2"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14602.678649934018!2d90.39540584013308!3d23.794774842079807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c70c15ea1de1%3A0x97856381e88fb311!2sBanani%20Model%20Town%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1682894058709!5m2!1sen!2sbd"
                 width="100%"
                 height="400" 
                 style={{border: "0"}} 
                 allowFullScreen="" 
                 loading="lazy" 
                 referrerPolicy="no-referrer-when-downgrade">
                 </iframe>
                </div>
            </div>
        </div>
    );
};

export default Contact;