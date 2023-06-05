import {React, useEffect, useState} from "react";
import firebase from "../controller/firebase"
import { getDatabase, ref, set, onValue } from "firebase/database";

export default props => {
    
    const [currentPosX, setPosX] = useState(0)
    const [currentPosY, setPosY] = useState(0)
    const db = getDatabase();
    const watchPos = ref(db, 'p1');
    useEffect(() => {
        onValue(watchPos, (snapshot) => {
            setPosX(parseInt(snapshot.val().x.replace("px", "")))
            setPosY(parseInt(snapshot.val().y.replace("px", "")))
        })
    })
    
    var player = {
        backgroundColor: "yellow",
        display: "flex",
        width: "50px",
        height: "50px",
        marginLeft: currentPosX+"px",
        marginTop: currentPosY+"px"
    }
    return(
        <div style={player}>

        </div>
    )
}