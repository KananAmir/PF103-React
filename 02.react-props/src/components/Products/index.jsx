import ProductCard from "../ProductCard";

function Products({ products }) {
    console.log(products);

    return (
        <div>
            <h2>Products</h2>

            <div className="products flex flex-wrap gap-5">
                {products.map((p) => {
                    return (
                       <ProductCard product={p} key={p.id}/>
                    )
                })}
            </div>
        </div>
    )
}

export default Products