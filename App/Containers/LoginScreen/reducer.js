const initialState={

}
export const LoginReducer=(state=initialState,action)=>{
    switch(action.type){
        case "username":{
            console.log("test reducer",action.data);
            return Object.assign({},state,{username:action.data});
        }
        case "details":{
            return Object.assign({},state,{details:action.data});
        }
        default:
        return state;
    }
}
