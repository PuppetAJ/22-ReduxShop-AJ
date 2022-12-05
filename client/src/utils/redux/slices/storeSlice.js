import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
  cart: [],
  cartOpen: false,
  categories: [],
  currentCategory: ''
}

export const storeSlice = createSlice({
  name: 'StoreState',
  initialState,
  reducers: {
      UPDATE_PRODUCTS: (state, action) => {
        return {
          ...state,
          products: [...action.products],
        };
      },
  
      UPDATE_CATEGORIES: (state, action) => {
        return {
          ...state,
          categories: [...action.categories]
        };
      },

  
      UPDATE_CURRENT_CATEGORY: (state, action) => {
        return {
          ...state,
          currentCategory: action.currentCategory
        };
      },

      ADD_TO_CART: (state, action) => {
        return {
          ...state,
          cartOpen: true,
          cart: [...state.cart, action.product]
        };
      },

      ADD_MULTIPLE_TO_CART: (state, action) => {
        return {
          ...state,
          cart: [...state.cart, ...action.products],
        };

      },

      REMOVE_FROM_CART: (state, action) => {
        let newState = state.cart.filter(product => {
          return product._id !== action._id;
        });
  
        return {
          ...state,
          cartOpen: newState.length > 0,
          cart: newState
        };
      }, 
      
      UPDATE_CART_QUANTITY: (state, action) => {
        return {
          ...state,
          cartOpen: true,
          cart: state.cart.map(product => {
            if(action._id === product._id) {
              product.purchaseQuantity = action.purchaseQuantity;
            }
            return product;
          })
        }
      },
  
      CLEAR_CART: (state) => {
        return {
          ...state,
          cartOpen: false,
          cart: []
        };
      },

      TOGGLE_CART: (state) => {
        return {
          ...state,
          cartOpen: !state.cartOpen
        };
      } 

  }
});

export const { 
  UPDATE_PRODUCTS, 
  UPDATE_CATEGORIES, 
  UPDATE_CURRENT_CATEGORY, 
  ADD_TO_CART,
  ADD_MULTIPLE_TO_CART,
  REMOVE_FROM_CART,
  UPDATE_CART_QUANTITY,
  CLEAR_CART,
  TOGGLE_CART
 } = storeSlice.actions;

 export default storeSlice.reducer;