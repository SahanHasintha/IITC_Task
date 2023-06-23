import { createReducer, on } from "@ngrx/store";
import { loadProducts } from "./products.actions";

export interface ProductsState {
    products : [];
    error : string;
    statue : 'pending' | 'loading' | 'error' | 'success';
}

export const initialState = {
    products : [],
    error : null,
    status : 'pending'
}

// export const productsReducer = createReducer(
//     initialState,
//     on (loadProducts, (state, {content}) => ({
//         ...state,
//         products : [...state.products, {id: Date}]
//     }))

// )