const intialState=[


]
const ItemsReducer=(state=intialState,action)=>{
    // console.log(action.payload)
    switch(action.type){
      case 'ItemInfo':
        return[
    
        action.payload
    ]  
        default:
            return state;
    }
}

export default ItemsReducer