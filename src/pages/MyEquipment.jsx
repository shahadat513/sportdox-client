import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import Card from "../components/Card";

const MyEquipment = () => {
    const { user } = useContext(AuthContext);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        if (user?.email) {
            fetch(`https://sportdox-server.vercel.app/myEquipment?email=${user.email}`)
                .then((res) => res.json())
                .then((data) => {
                    setProducts(data);
                })
                .catch((error) => {
                    console.error("Error fetching products:", error);
                });
        }
    }, [user?.email]);

    return (
        <div>
            <h1 className="text-3xl font-bold text-center py-10">My Products</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 w-11/12 mx-auto gap-8 my-8">
                {
                    products?.length > 0 ?
                        (
                            products?.map((product) => (<Card key={product._id} product={product}></Card>))
                        )
                        :
                        (
                            <p className="text-center col-span-full text-xl">
                                No products found. Please add some products.
                            </p>
                        )
                }
            </div>
        </div>
    );
};

export default MyEquipment;
