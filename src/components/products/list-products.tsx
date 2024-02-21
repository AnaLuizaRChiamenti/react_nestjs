interface IProduct {
    uid: number;
    name: string;
    category: string;
};

interface IListProductsProps {
    products: IProduct[]
}

export default function ListProducts({products} : IListProductsProps){
    
    return (
        <>
        <h1> Lista de produtos</h1>
        <ul>
            {products.map((product) =>  {
                return <li key={product.uid}>{product.name}</li>
            })}
        </ul>
        </>
    )
}