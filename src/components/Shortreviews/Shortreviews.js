import React from "react";

const shortReviews = ({ item }) => {
    const { name, review, rating } = item
    return (
        <div className="border-2 border-x-amber-300 rounded p-4 m-4 text-green-700">
            <h4 className="text-4xl font-bold">{name}</h4>
            <p className="text-2xl mt-2">Comment: <span>{review}</span></p>
            <p className="font-bold">Rating: {rating}</p>
        </div>
    )
}
export default shortReviews;