import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import SimplePieChart from '../Components/SimplePieChart.js'
import SimpleBarChart from '../Components/SimpleBarChart.js'

const Graphics = () => {
    const [count, setCount] = useState(0)
    const [countFour, setCountFour] = useState(0)
    const [countThree, setCountThree] = useState(0)
    const [countTwo, setCountTwo] = useState(0)
    const [countOne, setCountOne] = useState(0)
    const [countVerified, setCountVerified] = useState(0)
    const [countUnverified, setCountUnverified] = useState(0)
    
    const [nameMode, setNameMode] = useState({occur_array: [], count_array:[]})
    const [productMode, setProductMode] = useState({occur_array: [], count_array:[]})
    const [timeMode, setTimeMode] = useState({occur_array: [], count_array:[]})
    const [dateMode, setDateMode] = useState({occur_array: [], count_array:[]})

    const [showProductGraph, setShowProductGraph] = useState(false)
    const [showDateGraph, setShowDateGraph] = useState(false)
    const [showTimeGraph, setShowTimeGraph] = useState(false)
    const [showUserGraph, setShowUserGraph] = useState(true)

    const fetchData = async () => {
        fetch(`https://reviewer-kappa.vercel.app/reviews/count?overall=5`) 
            .then((res) => res.json()) 
            .then((result) => {setCount(result.count)})
        fetch(`https://reviewer-kappa.vercel.app/reviews/count?overall=4`) 
            .then((res) => res.json()) 
            .then((result) => {setCountFour(result.count)}) 
        fetch(`https://reviewer-kappa.vercel.app/reviews/count?overall=3`) 
            .then((res) => res.json()) 
            .then((result) => {setCountThree(result.count)}) 
        fetch(`https://reviewer-kappa.vercel.app/reviews/count?overall=2`) 
            .then((res) => res.json()) 
            .then((result) => {setCountTwo(result.count)}) 
        fetch(`https://reviewer-kappa.vercel.app/reviews/count?overall=1`) 
            .then((res) => res.json()) 
            .then((result) => {setCountOne(result.count)})
        fetch(`https://reviewer-kappa.vercel.app/reviews/count?verified=true`) 
            .then((res) => res.json()) 
            .then((result) => {setCountVerified(result.count)}) 
        fetch(`https://reviewer-kappa.vercel.app/reviews/count?verified=false`) 
            .then((res) => res.json()) 
            .then((result) => {setCountUnverified(result.count)})
        fetch(`https://reviewer-kappa.vercel.app/reviews/mode?field=reviewerName`) 
            .then((res) => res.json()) 
            .then((result) => {setNameMode(result); console.log(result)})
        fetch(`https://reviewer-kappa.vercel.app/reviews/mode?field=asin`) 
            .then((res) => res.json()) 
            .then((result) => {setProductMode(result); console.log(result)})
        fetch(`https://reviewer-kappa.vercel.app/reviews/mode?field=reviewTime`) 
            .then((res) => res.json()) 
            .then((result) => {setDateMode(result); console.log(result)})
        fetch(`https://reviewer-kappa.vercel.app/reviews/mode?field=summary`) 
            .then((res) => res.json()) 
            .then((result) => {setTimeMode(result); console.log(result)})
    };
    useEffect(() => {
        fetchData();
    }, []);
    const ratingData = [
        { name: '5-Star', value: count },
        { name: '4-Star', value: countFour },
        { name: '3-Star', value: countThree },
        { name: '2-Star', value: countTwo },
        { name: '1-Star', value: countOne },
    ];
    const verificationData = [
        { name: 'Verified', value: countVerified },
        { name: 'Non-verified', value: countUnverified },
    ];

    const nameModeData = [
        {
          name: nameMode.occur_array[0],
          reviews: nameMode.count_array[0],
        },
        {
          name: nameMode.occur_array[1],
          reviews: nameMode.count_array[1],
        },
        {
          name: nameMode.occur_array[2],
          reviews: nameMode.count_array[2],
        },
        {
          name: nameMode.occur_array[3],
          reviews: nameMode.count_array[3],
        },
        {
          name: nameMode.occur_array[4],
          reviews: nameMode.count_array[4],
        },
    ];
    const productModeData = [
        {
          name: productMode.occur_array[0],
          reviews: productMode.count_array[0],
        },
        {
          name: productMode.occur_array[1],
          reviews: productMode.count_array[1],
        },
        {
          name: productMode.occur_array[2],
          reviews: productMode.count_array[2],
        },
        {
          name: productMode.occur_array[3],
          reviews: productMode.count_array[3],
        },
        {
          name: productMode.occur_array[4],
          reviews: productMode.count_array[4],
        },
    ];

    const timeModeData = [
        {
          name: timeMode.occur_array[0],
          reviews: timeMode.count_array[0],
        },
        {
          name: timeMode.occur_array[1],
          reviews: timeMode.count_array[1],
        },
        {
          name: timeMode.occur_array[2],
          reviews: timeMode.count_array[2],
        },
        {
          name: timeMode.occur_array[3],
          reviews: timeMode.count_array[3],
        },
        {
          name: timeMode.occur_array[4],
          reviews: timeMode.count_array[4],
        },
    ];

    const dateModeData = [
        {
          name: dateMode.occur_array[0],
          reviews: dateMode.count_array[0],
        },
        {
          name: dateMode.occur_array[1],
          reviews: dateMode.count_array[1],
        },
        {
          name: dateMode.occur_array[2],
          reviews: dateMode.count_array[2],
        },
        {
          name: dateMode.occur_array[3],
          reviews: dateMode.count_array[3],
        },
        {
          name: dateMode.occur_array[4],
          reviews: dateMode.count_array[4],
        },
    ];
    

    return (
      <section className="px-10 py-10 bg-gradient-to-r from-[#581381] to-[#F5A1E8] min-h-screen text-white 
      ">
        <p className="text-4xl">Pie Charts</p>
        <p className="mt-3 text-pink-200">The graph (left) shows the percentage of products that received five, four ,
         three, two and one star reviews. The grpah (right) shows the percentage of verified and  non-verified reviews. </p>
        <div className="px-3 pb-5 flex justify-between">
            <SimplePieChart data = {ratingData} colors = {['#0088FE', '#FF8042','#FFBB28', '#00C49F', '#F0360F']} />
            <SimplePieChart data = {verificationData} colors = {['#0088FE', '#F0360F']} />
        </div>
        <p className="text-4xl my-10">Bar Charts</p>
        <p className="mt-3 text-pink-200">The bar chart shows the top five most occuring values. </p>
        <div className="px-3 pt-10 flex space-x-5">
            {showUserGraph ? <SimpleBarChart data = {nameModeData} /> : null }
            {showTimeGraph ? <SimpleBarChart data = {timeModeData} /> : null}
            {showProductGraph ? <SimpleBarChart data = {productModeData} /> : null}
            {showDateGraph ? <SimpleBarChart data = {dateModeData} /> : null}
            <div className="flex py-5 flex-col space-y-3">
                <button onClick={() => {setShowProductGraph(true);setShowTimeGraph(false);setShowDateGraph(false)
                ;setShowUserGraph(false)}} className="bg-pink-400 rounded-lg px-2 py-3">Most Reviewed Product IDs</button>
                <button onClick={() => {setShowProductGraph(false);setShowTimeGraph(true);setShowDateGraph(false)
                ;setShowUserGraph(false)}} className="bg-pink-500 rounded-lg px-2 py-3">Top Summary Quotes </button>
                <button onClick={() => {setShowProductGraph(false);setShowTimeGraph(false);setShowDateGraph(true)
                ;setShowUserGraph(false)}} className="bg-pink-600 rounded-lg px-2 py-3">Top Review Dates </button>
                <button onClick={() => {setShowProductGraph(false);setShowTimeGraph(false);setShowDateGraph(false)
                ;setShowUserGraph(true)}} className="bg-pink-700 rounded-lg px-2 py-3">Top Reviewers </button>
            </div>
        </div>
      </section>
    );
};

export default Graphics;