/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";

const AllCards = ({ product }) => {
    const { _id, name, category, price, image} = product;

    return (
        <tr>
            <td>
                <div className="flex items-center">
                    <div className="mask mask-squircle h-16 w-16">
                        <img
                            src={image}
                            alt={name || "Product Image"}
                            className="object-cover"
                        />
                    </div>
                </div>
            </td>
            <td className="text-left">{name}</td>
            <td className="text-left">{category}</td>
            <td className="text-left">{price}$</td>
            <td className="text-left"><NavLink to={`/cardDetails/${_id}`}><div className="btn text-blue-500 btn-link">View Details</div></NavLink></td>
        </tr>
    );
};

export default AllCards;
