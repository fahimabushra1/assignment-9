import React from "react";
// import img from "./teaTree.jpg";
// import Reviews from "./components/Reviews/Reviews";
// import DashBoard from "./components/DashBoard/DashBoard";
// import Blogs from "./components/Blogs/Blogs";
// import About from "./components/About/About";
// import NotFound from "./components/NotFound/NotFound";
// import Navbar from "./components/Navbar/Navbar";

const Home = () => {
    return (
        <div className="my-8 mx-8">
            <h1 className="text-6xl text-green-700 mt-14">Best Oil for your hair</h1>
            <div className="flex justify-space-between text-green-700 text-xl mt-4">
                <p>If you want healthy natural growing hair Tea tree is the only solution for you.It is the number one oil for smiling hair.</p>
                {/* <img src={img}></img> */}
            </div>
        </div>
    )
}
export default Home;