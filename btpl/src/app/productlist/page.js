async function productList() {
    let response = await fetch("https://dummyjson.com/products");
    let data = await response.json();
    return data.products;
}

export default async function Product() {
    let products = await productList();
    return (
        <>
            <h1>Product list</h1>
            <div>
                <h1>Product list</h1>
                {products.map((product,index) => (
                    <div key={index}>{product.title} price{product.price}</div>
                ))}
            </div>

        </>
    )
}

