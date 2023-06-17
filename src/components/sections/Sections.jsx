import { useContext } from "react";
import status from "../../constants/Status";
import { ProductContext } from "../../context/ProductProvider";
import Cards from "../cards/Cards";

const Sections = () => {
    const {productsState:{products}}=useContext(ProductContext)
    console.log(products);
    return (
        <div>
            {
                status.map(({ title, value }) =>
                    <section key={value}>
                        <h3 className="pb-1 mt-8 mb-8 text-3xl font-extrabold leading-none tracking-tight text-gray-700 border-b border-gray-600 md:text-4xl ">{title}</h3>
                        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                        {products.filter(({currentStatus})=>currentStatus===value).map(product=><Cards key={product.id} book={product}/>)}
                        </div>
                    </section>)
            }
        </div>
    );
};

export default Sections;