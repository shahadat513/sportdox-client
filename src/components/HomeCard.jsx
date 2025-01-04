import { useLoaderData, useNavigate } from "react-router-dom";
import Cards from "./Cards";

const HomeCard = () => {
    const products = useLoaderData();
    const navigate = useNavigate();

    return (
        <div>
            <h1 className="mb-5 text-2xl md:text-5xl font-bold text-center py-10">Featured Products</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-11/12 mx-auto gap-8 my-8">
                {
                    products?.map((product) => (<Cards key={product._id} product={product}></Cards>))
                }
            </div>
            <div className="text-center my-10">
                <button
                    className="btn btn-secondary"
                    onClick={() => navigate('/allEquipment')}
                >
                    View More
                </button>
            </div>
        </div>
    );
};

export default HomeCard;
