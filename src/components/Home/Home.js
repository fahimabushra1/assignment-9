import React from "react";
import { useNavigate } from "react-router-dom";
// import img from "./teaTree.jpg";


const Home = () => {
    const navigate = useNavigate();


    return (
        <div className="my-8 mx-8 text-green-700">
            <h1 className="text-6xl mt-14">Best Oil for your hair</h1>
            <div className="flex justify-space-between text-xl mt-4">
                <p>If you want healthy natural growing hair Tea tree is the only solution for you.It is the number one oil for smiling hair.</p>
                {/* <img src={img}></img> */}
            </div>
            <div className="mt-32 text-center">
                <h3 className="font-bold text-4xl">Customer Reviews (3)</h3>
                <button className="text-xl mt-16 p-2 rounded bg-gradient-to-r from-yellow-400 via-lime-300 to-amber-400" onClick={() => navigate('/reviews')}>see all reviews</button>

            </div>
        </div>
    )
}
export default Home;