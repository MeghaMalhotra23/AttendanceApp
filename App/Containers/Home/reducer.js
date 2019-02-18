const initialState={

}
export default function HomeReducer(state=initialState,action){
switch(action.type){
    case "AttendanceList":{
        console.log("In reducer", action.data);
        return Object.assign({},state,{attendanceList:action.data});
    }
    default:
    return state;
}
}