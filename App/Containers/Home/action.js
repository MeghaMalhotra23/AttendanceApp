export function getList(data){
    return{
        type:"AttendanceList",
        data
    }
}
export function getTotalAttendancelist(data){
    return{
        type:"TotalAttendanceList",
        data
    }
}
export function getTotalAttendanceValue(data){
    return{
        type:"TotalAttendanceValue",
        data
    }
}