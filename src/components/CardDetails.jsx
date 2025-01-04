import { NavLink, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const CardDetails = () => {
    const { id } = useParams();
    console.log(id);

    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`https://sportdox-server.vercel.app/products/${id}`) 
        
            .then((res) => res.json())
            .then((data) => {
                setProduct(data);
                setLoading(false);
            })
            .catch((err) => console.error("Failed to fetch product:", err));
    }, [id]);
    if (loading) {
        return <p className="text-center text-xl font-bold">Loading...</p>;
    }

    if (!product) {
        return <p className="text-center text-xl font-bold">Product not found.</p>;
    }

    const { name, category, price, image, stock, description, delivery, customization, rating } = product;

   
    return (
        <div className="flex flex-col items-center min-h-screen bg-gray-100 p-8">
            <div className="w-9/12 p-10  bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="flex flex-col lg:flex-row">
                    <div className="lg:w-1/2 justify-center">
                        <img src={image} alt={name} className="md:h-96 md:w-96 object-cover rounded-2xl" />
                    </div>
                    <div className="lg:w-1/2 p-6">
                        <h2 className="text-xl md:text-3xl font-bold text-gray-800 mb-4">{name}</h2>
                        <p className="text-gray-600 text-lg mb-4">
                            <span className="font-semibold">Category:</span> {category}
                        </p>
                        <p className="text-gray-600 text-lg mb-4">
                            <span className="font-semibold">Price:</span> ${price}
                        </p>
                        <p className="text-gray-600 text-lg mb-4">
                            <span className="font-semibold">Stock:</span> {stock}
                        </p>
                        <p className="text-gray-600 text-lg mb-4">
                            <span className="font-semibold">Delivery:</span> {delivery}
                        </p>
                        <p className="text-gray-600 text-lg mb-4">
                            <span className="font-semibold">Customization:</span> {customization}
                        </p>
                        <p className="text-gray-600 text-lg mb-4">
                            <span className="font-semibold">Rating:</span> {rating} <span className="text-yellow-500">★★★★★</span>
                        </p>
                        <p className="text-gray-600">
                            <span className="font-semibold">Description:</span> {description}
                        </p>
                        <NavLink to="/"><h1 className="btn btn-error mt-5  text-right justify-end">Close</h1></NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardDetails;
