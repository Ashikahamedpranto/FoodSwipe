const intialState={
    updateId:'',
    deleteId:'',
    addId:'',
    restId:'',
}

const AdminFoodCrudReducer=(state=intialState,action)=>{

switch(action.type){
    case 'foodDelete':
        // console.log(action.payload.foodRestId)
        // console.log(action.payload._id.$oid)
        return{
            ...state,
            deleteId:action.payload._id.$oid,
            restId:action.payload.foodRestId

        }

      case 'foodUpdate':
         return{
            ...state,
            updateId:action.payload._id.$oid,
            restId:action.payload.foodRestId
         }
         
        default:
            return state
}
}

export default AdminFoodCrudReducer