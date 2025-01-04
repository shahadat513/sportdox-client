/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Card = ({ product }) => {
    const { _id, name, category, price, image, rating } = product;

    const handleDelete = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://sportdox-server.vercel.app/${_id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
                    .catch(error => {
                        console.error("Error deleting product:", error);
                        Swal.fire({
                            title: "Error!",
                            text: "Failed to delete the product.",
                            icon: "error"
                        });
                    });
            }
        });
    };

    return (
        <div>
            <div className="hero bg-base-200 rounded-2xl">
                <div className="hero-content flex-col lg:flex-row gap-10 justify-between p-5">
                    <img
                        className="h-56 w-60 rounded-2xl"
                        src={image}
                        alt="Image Not Found"
                    />
                    <div className="flex flex-col gap-3 text-black">
                        <h1 className="text-2xl font-bold">
                            Name : <span className="text-lg font-normal">{name}</span>
                        </h1>
                        <h1 className="text-2xl font-bold">
                            Category : <span className="text-lg font-normal">{category}</span>
                        </h1>
                        <h1 className="text-2xl font-bold">
                            Price : <span className="text-lg font-normal">{price}$</span>
                        </h1>
                        <h1 className="text-2xl font-bold">
                            Rating :{" "}
                            <span className="text-lg font-normal">
                                {rating} <span className="text-yellow-500">★★★★★</span>
                            </span>
                        </h1>

                        <div className="flex gap-4 mt-3">
                            <Link to={`/update/${_id}`} >
                                <div className="btn bg-red-700 text-white">
                                    <i className="fa-solid fa-pen"></i>
                                </div>
                            </Link>
                            <div
                                onClick={handleDelete}
                                className="btn bg-red-700 text-white"
                            >
                                <i className="fa-solid fa-trash"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
