
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
    getAttendanceList(item){
        console.log(item);
        let year=item.split('-')[0];
        let clas=item.split('-')[1];
        let section=item.split('-')[2];
    let pr=new Promise((resolve,reject)=>{
        let list=firebase.database().ref('student_details/'+year+'/'+clas+'/'+section);
        list.on('value',(snapshot)=>{
            let obj=snapshot.val();
            resolve(obj);
            reject('rejected');
        })
    })
    return pr;
    },
    getTotalAttendanceValue(item){
        let pr2=new Promise((resolve,reject)=>{
            let total_list=firebase.database().ref('attendance_detail/'+item+'/total');
            total_list.on('value',(snapshot)=>{
                let data=snapshot.val();
                resolve(data);
                reject('rejected');
            })
        })
        return pr2;
    },
    getTotalAttendance(item,val){
        let pr2=new Promise((resolve,reject)=>{
            let total_list=firebase.database().ref('attendance_detail/'+item+'/q99900'+val);
            total_list.on('value',(snapshot)=>{
                let data=snapshot.val();
                resolve(data);
                reject('rejected');
            })
        })
        return pr2;
    },
    saveAttendance(item,val,data){
        //console.log(item,val,data);
        firebase.database().ref('attendance_detail/'+item+'/q99900'+val).set(data);
        this.updateTotalAttendance(item,val);
    },
    updateTotalAttendance(item,updatedValue){
        firebase.database().ref('attendance_detail/'+item+'/total').set(updatedValue);
    }
}
