export const LoginReducer=(state,action)=>{
    switch(action.type){
        case "username":{
            console.log("test reducer",action.data);
            return state;
        }
        default:
        return state;
    }
}
