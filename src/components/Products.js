import { useContext, useState } from "react";
import productsData from "../assets/productsData";
import { CartContext } from "../store";

export default function Products() {
    const Card = ({ product }) => {
        const [state, dispatch] = useContext(CartContext);
        const [addQuantity, setAddQuantity] = useState(1);
        return (
            <div className="card">
                <img src={product.img} className="card-img-top" alt={product.title} />
                <div className="card-body">
                    <h6 className="card-title">
                        {product.title}
                        <span className="float-end">{`NT$ ${product.price}`}</span>
                    </h6>
                    <select className="form-select"
                        onChange={(e) => {
                            e.preventDefault();
                            setAddQuantity(parseInt(e.target.value));
                        }}
                        value={addQuantity}
                    >
                        {
                            [...Array(20)].map((_, i) => {
                                return (
                                    <option value={i + 1} key={i}>{i + 1}</option>
                                )
                            })
                        }
                    </select>
                    <button type="button" className="btn btn-outline-primary w-100"
                        onClick={() => {
                            dispatch({
                                type: "ADD_TO_CART",
                                payload: {
                                    ...product,
                                    quantity: addQuantity
                                }
                            });
                            setAddQuantity(1);
                        }}>
                        加入購物車
                    </button>
                </div>
            </div>
        );
    }
    
    return (<>
        <div className="row row-cols-3 g-3">
            {productsData.map((product) => {
                return (
                    <div className="col" key={product.id}>
                        <Card product={product} />
                    </div>
                )
            })}
        </div>
    </>)
}


