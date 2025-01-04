import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import AllCards from "../components/AllCards";

const AllEquipment = () => {
    const products = useLoaderData(); // Load initial product data
    const [sortedProducts, setSortedProducts] = useState(products); // State to handle sorted products

    // Sort Low to High
    const handleSortLowToHigh = () => {
        const sorted = [...products].sort((a, b) => a.price - b.price);
        setSortedProducts(sorted);
    };

    // Sort High to Low
    const handleSortHighToLow = () => {
        const sorted = [...products].sort((a, b) => b.price - a.price);
        setSortedProducts(sorted);
    };

    return (
        <div>
            <h1 className="text-3xl font-bold text-center py-10">All Products</h1>
            <div className="w-11/12 mx-auto my-4">
                {/* Sorting Buttons */}
                <div className="text-right mb-4 flex justify-end gap-4">
                    <button
                        onClick={handleSortLowToHigh}
                        className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-700"
                    >
                        Sort (Low to High)
                    </button>
                    <button
                        onClick={handleSortHighToLow}
                        className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-red-700"
                    >
                        Sort (High to Low)
                    </button>
                </div>
                {/* Product Table */}
                <table className="table w-full text-left">
                    <thead>
                        <tr className="bg-gray-500 text-white">
                            <th>Cover</th>
                            <th>Product Name</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {sortedProducts?.map(product => (
                            <AllCards key={product._id} product={product} />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllEquipment;
