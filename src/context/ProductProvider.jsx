import { createContext, useReducer, useState } from "react";
import productReducer from "../reducer/ProductReducer";
import Products from './initialState';

export const ProductContext = createContext()

// eslint-disable-next-line react/prop-types
const ProductProvider = ({ children }) => {
    const [productsState, productStateDispatch] = useReducer(productReducer, Products)
    const {products}=productsState
    const [searchText, setSearchText] = useState('')
    const searchByText = () => {
        if (searchText === '') return products
       return products.filter(({ title }) => (title).toLowerCase().includes(searchText.toLowerCase()) )
    }
    return (
        <ProductContext.Provider value={{ productsState, productStateDispatch,searchText, setSearchText,searchByText }}>
            {children}
        </ProductContext.Provider>
    )
}

export default ProductProvider