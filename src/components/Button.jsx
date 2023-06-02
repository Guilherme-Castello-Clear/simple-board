import React from 'react'
import firebase from "../controller/firebase"
import { getDatabase, ref, set, onValue } from "firebase/database";
const db = getDatabase();
const watchPos = ref(db, 'p1');
var currentPos = 0;
onValue(watchPos, (snapshot) => {
    currentPos = parseInt(snapshot.val().x.replace("px", ""))
})


function move(direction, step){
    switch(direction){
        case 'Left':
            set(ref(db, 'p1'), {
                x: (currentPos+step)+"px"
            })
            console.log('Left!')
            break;
        case 'Right':
            set(ref(db, 'p1'), {
                x: (currentPos-step)+"px"
            })
            console.log('Right!')
            break
    }
}


const style = {
    width: "50px",
    height: "50px"
}

export default props => {
    return(
        <button style={style} onClick={() => {move(props.direction, props.step)}}>{props.direction}</button>
    )
}