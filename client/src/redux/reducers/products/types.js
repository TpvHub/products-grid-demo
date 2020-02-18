import { getActionTypeByPrefix } from 'redux/utils';

export const FETCH_PRODUCTS = getActionTypeByPrefix('products')('FETCH_PRODUCTS');
export const UPDATE_META = getActionTypeByPrefix('products')('UPDATE_META');