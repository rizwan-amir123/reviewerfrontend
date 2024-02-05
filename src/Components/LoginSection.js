import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';

const LoginSection = ({src, user, setUsername}) => {
    const [emailLogin, setEmail] = useState("");
    const [passwordLogin, setPassword] = useState("");

    const handlePasswordLoginInput = (e) => {
      setPassword(e.target.value);
    };
    const handleEmailLoginInput = (e) => {
      setEmail(e.target.value);
    };

    const handleLoginSubmit = () => {
        if (emailLogin === "" || passwordLogin === "") {
          alert("A field value is empty");
          return;
        }
        const postLoginData = async() => {
          const data = {
            email: emailLogin,
            password: passwordLogin
          };
          const response = await fetch("https://reviewer-kappa.vercel.app/login", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
              "content-type": "application/json",
            }
          }).catch((e) => console.log(e));
          if (!response.ok) {
            throw new Error(`HTTP error ${response.status}`);
          }
          else {
            console.log("Login Successful!");
            const fetchData = async () => {
              fetch(`http://localhost:8080/user/get?email=${emailLogin}`)
                  .then((res) => res.json()) 
                  .then((result) => {setUsername(result.username); console.log(result)})
            }
            fetchData();
            console.log("here")
            console.log("user:", user)
          }

          return response.json();
        };
        postLoginData();
    }

    return (
      <section className="py-10 px-10 bg-gradient-to-r from-[#581381] to-[#F5A1E8] min-h-screen text-white">
      <div className="grid md:grid-cols-2 items-center justify-center md:justify-between">
        <div className="px-8 pt-6 pb-8 mb-4">
            <p className="text-6xl mb-8">Login</p>
            <p>User:{user}</p>
            <div className="mb-4">
                <label className="block text-md font-semibold text-pink-200 mb-2" htmlFor="emailLogin">
                Email
                </label>
                <input className="bg-pink-100 border border-pink-400 text-violet-900 text-sm rounded-lg 
                focus:ring-pink-500 focus:border-pink-500 block w-2/3 p-2.5" 
                id="emailLogin" type="text" placeholder="abc@xyz.com" value={emailLogin}
                onChange={(e) => handleEmailLoginInput(e)}>
                </input>
            </div>
            <div className="mb-6">
                <label className="block text-md font-semibold text-pink-200 
                mb-2" htmlFor="passwordLogin">
                Password
                </label>
                <input className="bg-pink-100 border border-pink-400 text-violet-900 text-sm rounded-lg 
                focus:ring-pink-500 focus:border-pink-500 block w-2/3 p-2.5" 
                id="passwordLogin" type="password" placeholder="*****" value={passwordLogin}
                onChange={(e) => handlePasswordLoginInput(e)}>
                </input>
            </div>
            <div className="flex items-center justify-items-start">
                <button onClick={() => handleLoginSubmit()}  className="mr-8 border-2 border-cyan text-white 
                font-semibold shadow-lg rounded-lg px-5 py-2 bg-transparent border 
                hover:bg-[#F5A1E8] hover:text-[#581381] transition ease-in duration-300" type="button">
                Sign In
                </button>
                <a className="inline-block align-baseline font-bold text-md text-pink-400 
                hover:text-pink-600" href="#">
                Forgot Password?
                </a>
            </div>
            <div className="flex">
                <p className="text-center text-pink-200 my-4 text-sm justify-center">
                Not a member yet? 
                <Link to="/signup">
                    <span className="ml-1 text-pink-400 underline font-semibold hover:text-pink-600">Sign Up</span> here.
                </Link>
            </p>
            </div>
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

export default LoginSection;