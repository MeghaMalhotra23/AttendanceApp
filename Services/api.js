
import * as firebase from 'firebase';
export const firebaseOperations={
    getTeacherById(userid){
    let pr=new Promise((resolve,reject)=>{
            let user=firebase.database().ref('/teacher_login/'+userid);
            user.on('value',(snapshot)=>{
                let obj=snapshot.val()
                resolve(obj);
                reject('No such Teacher Id');
            })
        })
        return pr;
    },
    getTeacherDetails(username){
    let pr =new Promise((resolve,reject)=>{
        let details=firebase.database().ref('teacher_detail/'+username);
        details.on('value',(snapshot)=>{
            let obj=snapshot.val();
            resolve(obj);
            reject('No such Teacher Id');
        })
    })
    return pr; 
    },
    getAttendanceList(){
    let pr=new Promise((resolve,reject)=>{
        let list=firebase.database().ref('student_details/1/CSE/A');
        list.on('value',(snapshot)=>{
            let obj=snapshot.val();
            resolve(obj);
            reject('rejected');
        })
    })
    return pr;
    },
    getTotalAttendance(){
        let pr2=new Promise((resolve,reject)=>{
            let total_list=firebase.database().ref('attendance_detail/1-CSE-A-Applied Chemistry/q999002');
            total_list.on('value',(snapshot)=>{
                let data=snapshot.val();
                resolve(data);
                reject('rejected');
            })
        })
        return pr2;
    }
}
