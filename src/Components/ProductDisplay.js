import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';

const ProductDisplay = () => {
    const [products, setProducts] = useState([]);
    const [pageCount, setPageCount] = useState(1);

    function convertTimestamptoTime(unixTimestamp) {
        let dateObj = new Date(unixTimestamp * 1000);
        let utcString = dateObj.toUTCString();
        let time = utcString.slice(-11, -4);
        return time;
    }

    const fetchData = async () => {
        return fetch(`https://reviewer-kappa.vercel.app/reviews/all?page=${pageCount}`) 
                .then((res) => res.json()) 
                .then((result) => setProducts(result)) 
    };
    useEffect(() => {
        fetchData();
        console.log("pageCount:", pageCount)
    }, [pageCount]);
    return (
      <section className="py-10 px-10 bg-gradient-to-r from-[#581381] to-[#F5A1E8] min-h-screen text-white">
        <p className="text-3xl">Product Reviews</p>
        <div className="mt-5 gap-3 grid grid-cols-2">
            {products.map((item, index) => {
                return (
                <div key={index} className="px-3 py-3 bg-slate-700 rounded-lg">
                    <div className="flex justify-between">
                        <div className="flex flex-col">
                            <p className="text-xl font-semibold"> {item.reviewerName} </p>
                            <p className="text-sm "> ID: {item.reviewerID} </p>
                            <p className="text-lg mt-2">Product ID: {item.asin}</p>
                        </div>
                        <div className="flex flex-col">
                            
                            <p className="text-sm">Date: {item.reviewTime}</p>
                            <p className="text-sm">Time: {convertTimestamptoTime(item.unixReviewTime)}</p>
                            {item.verified ? <p className="mt-1 text-center bg-green-500 text-sm">VERIFIED</p> : 
                            <p className="mt-1 text-center bg-red-500 text-sm">UNVERIFIED</p>}
                        </div>
                    </div>
                    <div className="flex space-x-1">
                        {
                        [...Array(item.overall)].map((_, index) => (
                            <svg key={index} className="mt-4 w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z"/>
                            </svg>
                            )
                        )
                        }
                        {item.vote ? (<p className="mt-4">({item.vote})</p>) : null}
                    </div>
                    <div className="mt-2 flex flex-col rounded-lg text-gray-900 bg-amber-500 px-2 py-3">
                        <p className=""><span className="font-bold">Summary: </span> {item.summary}</p>
                        <p className=""><span className="font-bold">Review: </span> {item.reviewText}</p>
                        {(item.image).map((item, index) => 
                            (<div className="flex" key="index">
                                <img src={item}></img>
                            </div>)
                        )}
                        {/*
                        
                    
                        <p>Review Time</p>
                        <p>{item.reviewTime}</p>
                        <p>Unix Review Time</p>
                        <p>{item.unixReviewTime}</p>
                        <p>Image</p>
                        <p>{item.image}</p>
                        <p>Style</p>
                        <p>{item.style.Size}</p>
                        */}
                    </div>
                </div>
                );
            })}
        </div>
        <div className="place-content-center mt-5 flex">
            {(pageCount === 1) ? null : <button onClick={() => setPageCount(pageCount - 1) } className="items-center justify-center px-4 h-10 py-1 text-base font-medium text-gray-200 bg-gray-900 border border-gray-400 rounded-lg hover:text-gray-400">
                Previous
            </button>
            }
            <button onClick={() => setPageCount(pageCount + 1)} className="items-center justify-center px-4 h-10 py-1 ms-3 text-base font-medium text-gray-200 bg-gray-900 border border-gray-400 rounded-lg hover:text-gray-700">
                Next
            </button>
        </div>
      </section>
    );
};

export default ProductDisplay;