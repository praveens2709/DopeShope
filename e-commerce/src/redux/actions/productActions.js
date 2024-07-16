import { setProducts } from '../slices/productSlice';

export const fetchProducts = () => async (dispatch) => {
    try {
        const response = await fetch('http://localhost:5000/api/products');
        const data = await response.json();
        dispatch(setProducts(data));
    } catch (error) {
        console.error('Failed to fetch products:', error);
    }
};
