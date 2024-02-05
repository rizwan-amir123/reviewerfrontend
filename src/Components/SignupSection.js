import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';

const SignupSection = ({src}) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleNameInput = (e) => {
      setName(e.target.value);
    };
    const handleEmailInput = (e) => {
      setEmail(e.target.value);
    };
    const handlePasswordInput = (e) => {
        setPassword(e.target.value);
    };
    const handleConfirmPasswordInput = (e) => {
        setConfirmPassword(e.target.value);
    };

    const handleSubmit = () => {
        if (name === "" || email === "" || password === "" || confirmPassword === "") {
          alert("A field value is empty");
          return;
        }
        console.log("submit pressed")

        const postData = async() => {
          const data = {
            username: name,
            email: email,
            password: password,
            role: ["user"]
          };
          const response = await fetch("http://localhost:8080/signup", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
              "content-type": "application/json",
            }
          }).catch((e) => console.log(e));
          return response.json();
        };
        postData();
    }

    return (
    <section className="py-10 px-10 bg-gradient-to-r from-[#581381] to-[#F5A1E8] min-h-screen text-white">
        <div className="grid md:grid-cols-2 items-center justify-center md:justify-between">
            <div className="px-8 pt-10 pb-8 mb-4">
                <p className="text-6xl mb-8">Join Us</p>
                <div className="mb-4">
                    <label className="block text-md font-semibold text-pink-200 
                    mb-2" htmlFor="fullname">
                    Full Name
                    </label>
                    <input className="bg-pink-100 border border-pink-400 text-violet-900 text-sm rounded-lg 
                    focus:ring-pink-500 focus:border-pink-500 block w-5/6 p-2.5" 
                    id="fullname" type="text" placeholder="John Smith" value={name}
                    onChange={(e) => handleNameInput(e)}>
                    </input>
                </div>
                <div className="mb-6">
                    <label className="block text-md font-semibold text-pink-200 mb-2" htmlFor="email">
                        Email
                    </label>
                    <input className="bg-pink-100 border border-pink-400 text-violet-900 text-sm rounded-lg 
                    focus:ring-pink-500 focus:border-pink-500 block w-5/6 p-2.5" 
                        id="email" type="text" placeholder="abc@xyz.com" value={email}
                        onChange={(e) => handleEmailInput(e)}>
                    </input>
                </div>
                <div className="mb-6">
                    <label className="block text-md font-semibold text-pink-200 mb-2" 
                        htmlFor="password">
                        Password
                    </label>
                    <input className="bg-pink-100 border border-pink-400 text-violet-900 text-sm rounded-lg 
                    focus:ring-pink-500 focus:border-pink-500 block w-5/6 p-2.5" 
                        id="password" type="password" placeholder="*****"  value={password}
                        onChange={(e) => handlePasswordInput(e)}>
                    </input>
                </div>
                <div className="mb-6">
                    <label className="block text-md font-semibold text-pink-200 mb-2" 
                    htmlFor="confirm_password">
                        Confirm Password
                    </label>
                    <input className="bg-pink-100 border border-pink-400 text-violet-900 text-sm rounded-lg 
                    focus:ring-pink-500 focus:border-pink-500 block w-5/6 p-2.5" 
                        id="confirm_password" type="password" placeholder="*****" value={confirmPassword}
                        onChange={(e) => handleConfirmPasswordInput(e)}>
                    </input>
                </div>

                <button onClick={() => handleSubmit()}  className="bg-transparent border-2 border 
                    text-white hover:bg-[#F5A1E8] hover:text-[#581381] transition ease-in duration-300
                    font-semibold shadow-lg rounded-lg px-6 py-2 w-5/6" type="button">
                    Sign Up
                </button>
                <p className="text-pink-200 mt-4 mx-auto text-sm">
                By signing up, you agree to the <a className="text-pink-500 underline 
                font-semibold hover:text-pink-600" href="/#">Terms of Service and Privacy Policy </a>
                </p>
            </div>
            <div className="w-lg">
                <img
                    src={src}
                    alt="coding illustration"
                    className="max-w-xl w-lg h-auto mx-auto"
                />
            </div>
        </div>
    </section>
    );
};

export default SignupSection;