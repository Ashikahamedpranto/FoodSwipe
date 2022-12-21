const intialState={
cartItems:[],
totalPrice:0,
totalQuantity:0
}

const cartReducer=(state=intialState,action)=>{
switch(action.type){
   case'Add_to_cart':
//    console.log(action.payload)
 const item = action.payload;
      // console.log(item)

      const existItem = state.cartItems.find((x) => x.product === item.product);
    //   console.log(existItem)

      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
            x.product === existItem.product ? item : x
          ),
        };
      } else {
        // console.log(item.qty,item.foodPrice)
         const Tprice=state.totalPrice+( item.qty* item.foodPrice)
         const Tqty=state.totalQuantity+item.qty
        // state.totalPrice+= existItem.qty*existItem.foodPrice

        return {
          ...state,
          cartItems: [...state.cartItems, item],
         totalPrice:Tprice,
         totalQuantity:Tqty
        };
      }

      case 'INC':
        const item2 = action.payload;
             //  console.log(action.payload)
              const temp= state.cartItems.find((x) => x.product === item2.product);
             const findInd=state.cartItems.findIndex((x) => x.product === item2.product);
             //  console.log(findInd)
              temp.qty+=1;
             //  console.log(temp.qty)
             // state.item2[findInd]=findfood;
             return{
              ...state,
              totalPrice:state.totalPrice+ temp.foodPrice,
              totalQuantity:temp.qty
             }
       
             case 'DEC':
               const item3 = action.payload;
                     // console.log(action.payload)
                     const temp2= state.cartItems.find((x) => x.product === item3.product);
                    const findInd2=state.cartItems.findIndex((x) => x.product === item3.product);
                     // console.log(findInd2)
                     if(temp2.qty>1){
                     temp2.qty-=1;
                     // console.log(temp2.qty)
                    // state.item2[findInd]=findfood;
                    return{
                     ...state,
                     totalPrice:state.totalPrice-temp2.foodPrice,
                     totalQuantity:temp2.qty
                    }
                   }
                   else{
                     return state
                   }
                   case 'REMOVE_FROM_CART':
                    const temp3= state.cartItems.find((x) => x.product === action.payload);
                    return {
                      ...state,
                      cartItems: state.cartItems.filter((x) => x.product !== action.payload),
                      totalPrice:state.totalPrice-temp3.foodPrice*temp3.qty
                    };   
   default:
    return state;

}
}

export default cartReducer