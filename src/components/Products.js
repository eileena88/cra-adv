import productsData from "../assets/productsData";
import Card from "./Card";

export default function Products() {
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


