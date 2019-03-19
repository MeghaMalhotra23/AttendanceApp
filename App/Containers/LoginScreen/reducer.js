const initialState={

}
export const LoginReducer=(state=initialState,action)=>{
    switch(action.type){
        case "username":{
            return Object.assign({},state,{username:action.data});
        }
        case "details":{
            //console.log(action.data.name);
            return Object.assign({},state,{details:action.data});
        }
        default:
        return state;
    }
}
