const intialState={
    SearchItem:'',
    sort:'',
    rating:''
}
const filterReducer=(state=intialState,action)=>{
    switch(action.type){
        case 'SearchFood':
           return{
            ...state,
            searchItem:action.payload
          }
        case 'SortPrice':
            return{
                ...state,
                sort:action.payload
            }
          case 'ratingFilter':
            return{
                ...state,
                rating:action.payload
            }
            default:
                return state;
    }
}
export default filterReducer