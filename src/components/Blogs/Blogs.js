import React from "react";

const Blogs = () => {
    return (
        <div className="text-green-700 mt-12 ml-10">
            <h1 className="text-2xl">What is Context API?</h1>
            <p className="text-xl mt-4">Context API is a new feature of React.It is a way to produce global variables for React app that can be passed around.This is the alternative  to move prop from grandparent to child.It passes data through components without passing props.One can easily share state across the entire app.</p>
        </div>
    )
}
export default Blogs;