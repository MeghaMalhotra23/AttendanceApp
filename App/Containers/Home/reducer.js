const initialState={

}
export default function HomeReducer(state=initialState,action){
switch(action.type){
    case "AttendanceList":{
        return Object.assign({},state,{attendanceList:action.data});
    }
    case "TotalAttendanceList":{
        return Object.assign({},state,{totalAttendanceList:action.data});
    }
    default:
    return state;
}
}