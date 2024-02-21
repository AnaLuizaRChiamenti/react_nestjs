import ListProducts from "@/components/products/list-products"
import DefaultLayout from "@/layout/default"

export default function Products() {
     const list = [
        {uid: 1, name: 'Joe Jonas', category: 'Bacaca'},
        {uid: 2, name: 'Demi Lovato', category: 'Vitima'},
        {uid: 3, name: 'Alice Cullen', category: 'Linda'},
        {uid: 4, name: 'Edward Cullen', category: 'Gay'},
        {uid: 5, name: 'Garrafa', category: 'Plastico'},
    ]
    return (
        <div>
            <h1>Produtos</h1>
            <div>
                <ListProducts products={list}/>
            </div>
        </div>
    )
}

Products.getLayout = DefaultLayout