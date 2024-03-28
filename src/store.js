import { createContext } from "react";

function calculateTotalNums(cartList) {
  return cartList.map(item => item.quantity)
    .reduce((a, b) => a + b, 0);
}

function calculateTotalPrice(cartList) {
    return cartList.map((item) => item.quantity * item.price)
      .reduce((a, b) => a + b, 0);
}

export const cartInit = {
    cartList: [],
}

export const cartReducer = (state, action) => {
    // console.log('state', state)
    // console.log('action', stactionate)
    const cartList = [...state.cartList];
    console.log(cartList)
    // #1 先取得當前購物車目標品項的索引
    console.log(action.payload)
    const index = cartList.findIndex((item) => item.id === action.payload.id);
    // console.log(index)
    switch (action.type) {
      case "ADD_TO_CART":
        if (index === -1) {
          cartList.push(action.payload);
        } else {
          cartList[index].quantity += action.payload.quantity;
        }
        // console.log('cartList', cartList)
        // const test = {
        //   ...state,
        //   cartList
        // }
        // console.log('test', test)

        // const array = cartList.map((item) => {
        //   return item.quantity * item.price;
        // });
        // const total = array.reduce((a, b) => {
        //   return a + b;
        // }, 0);

        return {
          ...state,
          cartList,
          total: calculateTotalPrice(cartList),
          totlaNums: calculateTotalNums(cartList)
        };

      case "CHANGE_CART_QUANTITY":
        cartList[index].quantity = action.payload.quantity;
        return {
          ...state,
          cartList,
          total: calculateTotalPrice(cartList),
          totlaNums: calculateTotalNums(cartList)
        };

      case "REMOVE_CART_ITEM":
        cartList.splice(index, 1);
        return {
          ...state,
          cartList,
          total: calculateTotalPrice(cartList),
          totlaNums: calculateTotalNums(cartList)
        };

      default:
        return state
    }
  }

// 共用環境
export const CartContext = createContext({});
