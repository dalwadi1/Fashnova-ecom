export const products = [
    { id: 1, name: "T-Shirt", price: 123, image: "/assets/images/products/imag1.jpg", category: "Shirts" },
    { id: 2, name: "Jeans", price: 200, image: "/assets/images/products/img2.jpg", category: "Shirts" },
    { id: 3, name: "Dress", price: 150, image: "/assets/images/products/img3.jpg", category: "T-Shirts" },
    { id: 4, name: "Shirt", price: 90, image: "/assets/images/products/img4.jpg", category: "T-Shirts" },
    { id: 5, name: "Kids Shirt", price: 80, image: "/assets/images/products/img5.jpg", category: "Pents" },
    { id: 6, name: "Pents", price: 70, image: "/assets/images/products/img6.jpg", category: "Pents" },
]

export const ProductGrid = ({ category }) => {
    const filtered =
        category === "all"
            ? products
            : products.filter((p) => p.category === category)

    return (
        <div className="grid sm:grid-cols-4 grid-cols-2 gap-4 w-full">
            {filtered.map((item) => (
                <div key={item.id} className="flex flex-col w-full gap-2">
                    <div className="flex items-center justify-center rounded-sm bg-gray-50">
                        <img
                            src={item.image}
                            alt={item.name}
                            className="w-full lg:h-85 h-50 object-cover"
                        />
                    </div>
                    <p className="sm:text-sm text-xs px-3">{item.name}</p>
                    <p className="sm:text-sm text-xs px-3">₹{item.price}</p>
                </div>
            ))}
        </div>

    )
}
