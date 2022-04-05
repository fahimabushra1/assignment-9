import React from "react";
import { useNavigate } from "react-router-dom";
import useProducts from "../../Hooks/useProducts";
import Shortreviews from "../Shortreviews/Shortreviews";


const Home = () => {
    const navigate = useNavigate();
    const [products, setProducts] = useProducts()
    const newItems = products.slice(0, 3)
    console.log(newItems)


    return (
        <div className="my-8 mx-8 text-green-700">
            <h1 className="text-8xl mt-20">Best Oil for your hair</h1>
            <div className="flex justify-space-between text-2xl items-center mt-4">
                <p>If you want healthy natural growing hair Tea tree is the only solution for you.It is the number one oil for smiling hair.</p>
                <img width={500} src='http://www.healthhomie.com/wp-content/uploads/2018/12/Tea-Tree-Oil.jpg'></img>
            </div>
            <div className="mt-32 text-center">
                <h3 className="font-bold text-4xl">Customer Reviews (3)</h3>
                <div className="grid grid-cols-3 gap-4 mt-16">
                    {
                        newItems.map(item => <Shortreviews
                            key={item.id}
                            item={item}
                        ></Shortreviews>)
                    }
                </div>
                <button className="text-xl mt-16 p-2 rounded bg-gradient-to-r from-yellow-400 via-lime-300 to-amber-400" onClick={() => navigate('/reviews')}>see all reviews</button>

            </div>
        </div>
    )
}
export default Home;