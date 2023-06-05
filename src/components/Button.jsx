import React from 'react'
import firebase from "../controller/firebase"
import { getDatabase, ref, set, onValue } from "firebase/database";
const db = getDatabase();
const watchPos = ref(db, 'p1');
var currentPosX = 0;
var currentPosY = 0;
onValue(watchPos, (snapshot) => {
    currentPosX = parseInt(snapshot.val().x.replace("px", ""))
    currentPosY = parseInt(snapshot.val().y.replace("px", ""))
})


function move(direction, step){
    switch(direction){
        case 'Left':
            set(ref(db, 'p1'), {
                x: (currentPosX+step)+"px",
                y: (currentPosY)+"px"
            })
            break;
        case 'Right':
            set(ref(db, 'p1'), {
                x: (currentPosX-step)+"px",
                y: (currentPosY)+"px"
            })
            break
        case 'Up':
        set(ref(db, 'p1'), {
            x: (currentPosX)+"px",
            y: (currentPosY-step)+"px"
        })
        break

        case 'Down':
        set(ref(db, 'p1'), {
            x: (currentPosX)+"px",
            y: (currentPosY+step)+"px"
        })
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