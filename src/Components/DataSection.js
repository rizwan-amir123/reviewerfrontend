
import React, { useState, useEffect } from 'react';

const DataSection = () => {
    const [productID, setProductID] = useState("");
    const [reviewerID, setReviewerID] = useState("");
    const [reviewerIDDelete, setReviewerIDDelete] = useState("");
    const [reviewerIDPatch, setReviewerIDPatch] = useState("");
    const [reviewTextPatch, setReviewTextPatch] = useState("")
    const [reviewerName, setReviewerName] = useState("");
    const [vote, setVote] = useState("");
    const [rating, setRating] = useState(0);
    const [summary, setSummary] = useState("") 
    const [reviewText, setReviewText] = useState("") 
    const [verified, setVerified] = useState(false)
    const [image, setImage] = useState("")
    

    const handleDelete = (i) => {
      console.log(reviewerIDDelete)
      fetch("https://reviewer-kappa.vercel.app/reviews/delete/", {
        method: 'DELETE',
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify({ reviewerID: reviewerIDDelete }),
        })
        .then(async (response) => {
        if (response.ok) {
          const data = await response.json();
          console.log(data.message);
        } else {
          const errorData = await response.json();
          console.error('Error:', errorData.message);
        }
      })
      .catch((error) => {
        console.error('Network error:', error);
      });

    }

    const handleSubmit = () => {
        console.log(rating);
        console.log(reviewText);
        console.log(vote);
        console.log(summary);
        console.log(image);
        console.log(verified);
        console.log(reviewerID);
        console.log(productID);
        console.log(reviewerName);
        console.log(Date.now());
        let image_arr = [];
        image_arr.push(image)
        const time = Number(Date.now())
        const data = {
            overall: Number(rating),
            reviewText: reviewText,
            summary: summary,
            image: image_arr,
            verified: Boolean(verified),
            reviewerID: reviewerID,
            asin: productID,
            reviewerName: reviewerName,
            unixReviewTime: time
        };
        const postData = async() => {
            const response = await fetch("https://reviewer-kappa.vercel.app/reviews/add/", {
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
      <section className="px-10 py-10 bg-gradient-to-r from-[#581381] to-[#F5A1E8] min-h-screen text-white 
      ">
        <p className="text-3xl"> CRUD Operations</p>
        <div className="mt-5 rounded-lg bg-pink-300 py-5 px-5 font-semibold text-violet-800">
            <p className="text-xl">Add Data</p>
            <div className="flex flex-col">
                <div className="flex flex-col">
                    <label for="productID" className="mt-3 block mb-2 text-sm text-gray-900">Product ID</label>
                    <input
                            id = "productID"
                            value={productID}
                            onChange={(e) => setProductID(e.target.value)}
                            type="text"
                            className="bg-pink-200 border border-pink-500 text-violet-900 text-sm rounded-lg 
                            focus:ring-pink-500 focus:border-pink-500 block w-1/3 p-2.5"
                            placeholder={"Product ID i.e. B000K2PJ4K"}
                    />
                </div>

                
                <div className="flex w-1/2 flex-col">
                    <label for="reviewerID" className="mt-3 block mb-2 text-sm text-gray-900">Reviewer ID</label>
                    <input
                            id = "reviewerID"
                            value={reviewerID}
                            onChange={(e) => setReviewerID(e.target.value)}
                            type="text"
                            className="bg-pink-200 border border-pink-500 text-violet-900 text-sm rounded-lg 
                            focus:ring-pink-500 focus:border-pink-500 block w-1/2 p-2.5"
                            placeholder={"Reviewer ID i.e. ALJ66O1Y6SLHA"}
                    />
                </div>
                <div className="flex flex-col">
                    <label for="reviewerName" className="mt-3 block mb-2 text-sm text-gray-900">Reviewer Name</label>
                    <input
                            id = "reviewerName"
                            value={reviewerName}
                            onChange={(e) => setReviewerName(e.target.value)}
                            type="text"
                            className="bg-pink-200 border border-pink-500 text-violet-900 text-sm rounded-lg 
                            focus:ring-pink-500 focus:border-pink-500 block w-1/3 p-2.5"
                            placeholder={"Reviewer Name"}
                    />
                </div>
                

                <div className="flex flex-col">
                    <label for="vote" className="mt-3 block mb-2 text-sm text-gray-900">Votes</label>
                    <input
                            id = "vote"
                            value={vote}
                            onChange={(e) => setVote(e.target.value)}
                            type="text"
                            className="bg-pink-200 border border-pink-500 text-violet-900 text-sm rounded-lg 
                            focus:ring-pink-500 focus:border-pink-500 block w-1/3 p-2.5"
                            placeholder={"Vote i.e. 1,2,3"}
                    />
                </div>

                <div className="flex flex-col">
                    <label for="summary" className="mt-3 block mb-2 text-sm text-gray-900">Summary</label>
                    <input
                            id = "summary"
                            value={summary}
                            onChange={(e) => setSummary(e.target.value)}
                            type="text"
                            className="bg-pink-200 border border-pink-500 text-violet-900 text-sm rounded-lg 
                            focus:ring-pink-500 focus:border-pink-500 block w-1/3 p-2.5"
                            placeholder={"Summary"}
                    />
                </div>

                <div className="flex flex-col">
                    <label for="review" className="mt-3 block mb-2 text-sm text-gray-900">Review</label>
                    <input
                            id = "review"
                            value={reviewText}
                            onChange={(e) => setReviewText(e.target.value)}
                            type="text"
                            className="bg-pink-200 border border-pink-500 text-violet-900 text-sm rounded-lg 
                            focus:ring-pink-500 focus:border-pink-500 block w-1/3 p-2.5"
                            placeholder={"Review..."}
                    />
                </div>

                <div className="flex flex-col">
                    <label for="image" className="mt-3 block mb-2 text-sm text-gray-900">Image Link</label>
                    <input
                            id = "image"
                            value={image}
                            onChange={(e) => setImage(e.target.value)}
                            type="text"
                            className="bg-pink-200 border border-pink-500 text-violet-900 text-sm rounded-lg 
                            focus:ring-pink-500 focus:border-pink-500 block w-1/3 p-2.5"
                            placeholder={"Image Link"}
                    />
                </div>

                <div className="flex flex-col">
                    <label for="rating" className="mt-3 block mb-2 text-sm text-gray-900">Rating</label>
                    <select value={rating} onChange={(e) => setRating(e.target.value)} id="rating" 
                    className="bg-pink-200 border border-pink-500 text-violet-900 text-sm rounded-lg 
                    focus:ring-pink-500 focus:border-pink-500 block w-1/5 p-2.5">
                        <option defaultValue>Choose a rating</option>
                        <option value={5}>5</option>
                        <option value={4}>4</option>
                        <option value={3}>3</option>
                        <option value={2}>2</option>
                        <option value={1}>1</option>
                    </select>
                </div>

                <div className="flex flex-col">
                    <label for="verification" className="mt-3 block mb-2 text-sm text-gray-900">Verified</label>
                    <select value={verified} onChange={(e) => setVerified(e.target.value)} id="verification" 
                    className="bg-pink-200 border border-pink-500 text-violet-900 text-sm rounded-lg 
                    focus:ring-pink-500 focus:border-pink-500 block w-1/5 p-2.5">
                        <option selected>Verified?</option>
                        <option value={true}>Yes</option>
                        <option value={false}>No</option>
                    </select>
                </div>
            </div>
            <button onClick={() => handleSubmit()} className="py-3 px-2 bg-violet-800 mt-5 hover:opacity-80  rounded-lg 
            w-1/6 text-white text-semibold"> Submit</button>
        </div>
        <div className="mt-5 rounded-lg bg-pink-300 py-5 px-5 font-semibold text-violet-800">Update Data 
                <div className="flex w-1/2 flex-col">
                        <label for="reviewerIDPatch" className="mt-3 block mb-2 text-sm text-gray-900">Reviewer ID</label>
                        <input
                                id = "reviewerIDPatch"
                                value={reviewerIDPatch}
                                onChange={(e) => setReviewerIDPatch(e.target.value)}
                                type="text"
                                className="bg-pink-200 border border-pink-500 text-violet-900 text-sm rounded-lg 
                                focus:ring-pink-500 focus:border-pink-500 block w-1/2 p-2.5"
                                placeholder={"Reviewer ID i.e. ALJ66O1Y6SLHA"}
                        />
                </div>
                <div className="flex flex-col">
                    <label for="reviewPatch" className="mt-3 block mb-2 text-sm text-gray-900">Review</label>
                    <input
                            id = "reviewPatch"
                            value={reviewTextPatch}
                            onChange={(e) => setReviewTextPatch(e.target.value)}
                            type="text"
                            className="bg-pink-200 border border-pink-500 text-violet-900 text-sm rounded-lg 
                            focus:ring-pink-500 focus:border-pink-500 block w-1/3 p-2.5"
                            placeholder={"Review..."}
                    />
                </div>
                <button className="py-3 px-2 bg-violet-800 mt-5 hover:opacity-80  rounded-lg w-1/6 
                text-white text-semibold"> Update</button>
            </div>
        <div className="mt-5 rounded-lg bg-pink-300 py-5 px-5 font-semibold text-violet-900">Delete Data 
            <div className="flex w-1/2 flex-col">
                    <label for="reviewerIDDelete" className="mt-3 block mb-2 text-sm text-gray-900">Reviewer ID</label>
                    <input
                            id = "reviewerIDDelete"
                            value={reviewerIDDelete}
                            onChange={(e) => setReviewerIDDelete(e.target.value)}
                            type="text"
                            className="bg-pink-200 border border-pink-500 text-violet-900 text-sm rounded-lg 
                            focus:ring-pink-500 focus:border-pink-500 block w-1/2 p-2.5"
                            placeholder={"Reviewer ID i.e. ALJ66O1Y6SLHA"}
                    />
            </div>
            <button onClick={() => handleDelete()} className="py-3 px-2 bg-violet-800 mt-5 hover:opacity-80  rounded-lg w-1/6 
            text-white text-semibold"> Delete</button>
        
        </div>
      </section>
    );
};

export default DataSection;