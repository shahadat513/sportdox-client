import { useContext } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../providers/AuthProvider";

const Update = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate()

    const product = useLoaderData()
    console.log("Fetched product:", product);

    const { _id, name, category, price, image, stock, description, delivery, customization, rating } = product;

    const handleUpdate = (event) => {
        event.preventDefault();

        const form = event.target;

        const nameUser = form.nameUser.value;
        const emailUser = form.emailUser.value;
        const name = form.itemName.value;
        const category = form.category.value;
        const description = form.description.value;
        const price = form.price.value;
        const delivery = form.delivery.value;
        const stock = form.stock.value;
        const rating = form.rating.value;
        const image = form.image.value;
        const customization = form.customization.value;

        const updateProducts = {
            nameUser, emailUser, name, category, description, price, delivery, stock, rating, image, customization,
        };

       
        fetch(`https://sportdox-server.vercel.app/${_id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updateProducts),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.modifiedCount) {
                    Swal.fire({
                        title: 'Good job!',
                        text: 'Product Updated Successfully',
                        icon: 'success',
                    });
                    form.reset(); 
                    navigate('/')

                }
            })
            .catch((error) => {
                console.error('Error adding product:', error);
            });
    };

    return (
        <div className="bg-base-300">
            <div className="w-11/12 mx-auto py-24">
                <h1 className="text-3xl font-bold text-center pb-5">Update Product : {name}</h1>
                <form onSubmit={handleUpdate}>
                    {/* User Details Row */}
                    <div className="md:flex gap-8">
                        <label className="form-control md:w-1/2">
                            <div className="label">
                                <span className="label-text text-xl font-semibold">User Name</span>
                            </div>
                            <input
                                type="text"
                                name="nameUser"
                                value={user?.displayName || ''}
                                className="input input-bordered w-full"
                                readOnly
                            />
                        </label>
                        <label className="form-control md:w-1/2">
                            <div className="label">
                                <span className="label-text text-xl font-semibold">User Email</span>
                            </div>
                            <input
                                type="email"
                                name="emailUser"
                                value={user?.email || ''}
                                className="input input-bordered w-full"
                                readOnly
                            />
                        </label>
                    </div>

                   
                    <div className="md:flex gap-8 pb-3">
                        <label className="form-control md:w-1/2">
                            <div className="label">
                                <span className="label-text text-xl font-semibold">Item Name</span>
                            </div>
                            <input
                                defaultValue={name}
                                type="text"
                                name="itemName"
                                placeholder="Enter Product Name"
                                className="input input-bordered w-full"
                            />
                        </label>
                        <label className="form-control md:w-1/2">
                            <div className="label">
                                <span className="label-text text-xl font-semibold">Category</span>
                            </div>
                            <input
                                defaultValue={category}
                                type="text"
                                name="category"
                                placeholder="Enter Product Category"
                                className="input input-bordered w-full"
                            />
                        </label>
                    </div>
                    <div className="md:flex gap-8 pb-3">
                        <label className="form-control md:w-1/2">
                            <div className="label">
                                <span className="label-text text-xl font-semibold">Description</span>
                            </div>
                            <input
                                defaultValue={description}
                                type="text"
                                name="description"
                                placeholder="Enter Product Description"
                                className="input input-bordered w-full"
                            />
                        </label>
                        <label className="form-control md:w-1/2">
                            <div className="label">
                                <span className="label-text text-xl font-semibold">Price</span>
                            </div>
                            <input
                                defaultValue={price}
                                type="number"
                                name="price"
                                placeholder="Enter Product Price"
                                className="input input-bordered w-full"
                            />
                        </label>
                    </div>
                    <div className="md:flex gap-8 pb-3">
                        <label className="form-control md:w-1/2">
                            <div className="label">
                                <span className="label-text text-xl font-semibold">Processing Time</span>
                            </div>
                            <input
                                defaultValue={delivery}
                                type="text"
                                name="delivery"
                                placeholder="Enter Product Delivery Time"
                                className="input input-bordered w-full"
                            />
                        </label>
                        <label className="form-control md:w-1/2">
                            <div className="label">
                                <span className="label-text text-xl font-semibold">Stock Status</span>
                            </div>
                            <input
                                defaultValue={stock}
                                type="number"
                                name="stock"
                                placeholder="Enter Product Quantity"
                                className="input input-bordered w-full"
                            />
                        </label>
                    </div>
                    <div className="md:flex gap-8 pb-3">
                        <label className="form-control md:w-1/2">
                            <div className="label">
                                <span className="label-text text-xl font-semibold">Rating</span>
                            </div>
                            <input
                                defaultValue={rating}
                                type="number"
                                name="rating"
                                placeholder="Enter Product Rating"
                                className="input input-bordered w-full"
                            />
                        </label>
                        <label className="form-control md:w-1/2">
                            <div className="label">
                                <span className="label-text text-xl font-semibold">Customization</span>
                            </div>
                            <input
                                defaultValue={customization}
                                type="text"
                                name="customization"
                                placeholder="Enter Product Customization"
                                className="input input-bordered w-full"
                            />
                        </label>
                    </div>
                    <div className="pb-3">
                        <label className="form-control">
                            <div className="label">
                                <span className="label-text text-xl font-semibold">Image URL</span>
                            </div>
                            <input
                                defaultValue={image}
                                type="text"
                                name="image"
                                placeholder="Enter Product Image URL"
                                className="input input-bordered w-full"
                            />
                        </label>
                    </div>
                    <input
                        className="w-full p-2 bg-gray-600 text-white mt-4 cursor-pointer"
                        type="submit"
                        value="Update"
                    />
                </form>
            </div>
        </div>
    );
}

export default Update;
