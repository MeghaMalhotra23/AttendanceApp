
import * as firebase from 'firebase';
export const firebaseOperations={
    getTeacherById(userid){
        var pr=new Promise((resolve,reject)=>{
            var user=firebase.database().ref('/teacher_login/'+userid);
            user.on('value',(snapshot)=>{
                var obj=snapshot.val()
                resolve(obj);
                reject('No such Teacher Id');
            })
        })
        return pr;
    }
}