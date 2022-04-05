import React from "react";
import useProducts from "../../Hooks/useProducts";
import ReviewItem from "../ReviewItem/ReviewItem";


const Reviews = () => {
    const [products, setProducts] = useProducts()

    return (
        <div className="grid grid-cols-3 gap-4">
            {
                products.map(product => <ReviewItem
                    key={product.id}
                    product={product}
                ></ReviewItem>)
            }
        </div>
    )
}
export default Reviews;