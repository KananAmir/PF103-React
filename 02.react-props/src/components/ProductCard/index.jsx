import Button from "../Button"

const ProductCard = ({ product }) => {
    return (
        <div className="bg-white rounded-lg overflow-hidden shadow-lg ring-4 ring-red-500 ring-opacity-40 max-w-sm">
            <div className="relative">
                <img
                    className="w-full"
                    src={product.image}
                    alt="Product Image"
                />
                <div className="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 m-2 rounded-md text-sm font-medium">
                    SALE
                </div>
            </div>
            <div className="p-4">
                <h3 className="text-lg font-medium mb-2">{product.title}</h3>
                <p className="text-gray-600 text-sm mb-4">
                    {product.description}
                </p>
                <div className="flex items-center justify-between">
                    <span className="font-bold text-lg">${product.price}</span>
                    {/* <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                        Buy Now
                    </button> */}
                    <Button text={"Buy Now"}/>
                </div>
            </div>
        </div>
    )
}

export default ProductCard
