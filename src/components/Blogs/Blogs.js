import React from "react";

const Blogs = () => {
    return (
        <div className="text-green-700 mt-12 ml-10">
            <h1 className="text-2xl">What is Context API?</h1>
            <p className="text-xl mt-4">Context API is a new feature of React.It is a way to produce global variables for React app that can be passed around.This is the alternative  to move prop from grandparent to child.It passes data through components without passing props.One can easily share state across the entire app.</p>
            <h1 className="mt-4 text-2xl">What is Semantic tag?</h1>
            <p className="mt-4">Semantic tags clearly describe their meaning both in a human and machine.Semantic elements accurately describe their purpose and the type of content that is inside them.Semantic elements make the web nicer.It is much easier to read and it has great accessibility.It also leads to more consistent code.</p>
        </div>
    )
}
export default Blogs;