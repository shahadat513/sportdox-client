/* eslint-disable react/prop-types */


const Cards = ({ product }) => {
    const { _id, name, price, image, stock, description } = product
    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-xl flex ">
                <figure className="px-10 pt-10">
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                        alt="Shoes"
                        className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}
                    </h2>
                    <p>{description}</p>
                    <p>{price}</p>
                    <div className="card-actions">
                        <button className="btn btn-primary">Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cards;
