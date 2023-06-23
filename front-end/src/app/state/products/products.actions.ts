import { createAction, props } from '@ngrx/store';

export const addProduct = createAction(
    '[Products Page] Add Product',
    props<{ content: string }>()
);

export const removeProduct= createAction(
    '[Products Page] Remove Product'
);

export const loadProducts = createAction(
    '[Products Page] Load Products'
);