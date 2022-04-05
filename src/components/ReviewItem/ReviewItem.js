import React from "react";

const ReviewItem = ({ product }) => {
    const { name, review, rating } = product
    return (
        <div className="mt-32 border-2 border-x-amber-300 rounded p-4 text-green-700">
            <div>
                <h4 className="text-4xl font-bold">{name}</h4>
                <p className="text-2xl mt-2">Comment: <span>{review}</span></p>
                <p className="font-bold">Rating: {rating}</p>
            </div>
        </div>
    )
};


export default ReviewItem;