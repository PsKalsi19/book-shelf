/* eslint-disable no-unused-vars */
 const productReducer = (state, { type, payload:{id,status} }) => {
    const {products}=state
    switch (type) {
        case "CHANGE_STATUS":
            return {products:products.map(product=>product.id===id?({...product,currentStatus:status}):product)}
        default:
            return state;
    }
};

export default productReducer