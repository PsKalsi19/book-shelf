import { createContext, useReducer } from "react";
import productReducer from "../reducer/ProductReducer";
import Products from './initialState';

export const ProductContext = createContext()

// eslint-disable-next-line react/prop-types
const ProductProvider = ({ children }) => {
    const [productsState, productStateDispatch] = useReducer(productReducer, Products)
    return (
        <ProductContext.Provider value={{ productsState, productStateDispatch }}>
            {children}
        </ProductContext.Provider>
    )
}

export default ProductProvider