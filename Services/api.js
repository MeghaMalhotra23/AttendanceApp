
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
    }
}