import {React, useEffect, useState} from "react";
import firebase from "../controller/firebase"
import { getDatabase, ref, set, onValue } from "firebase/database";

export default props => {
    
    const [currentPos, setPos] = useState(0)
    const db = getDatabase();
    const watchPos = ref(db, 'p1');
    useEffect(() => {
        onValue(watchPos, (snapshot) => {
            setPos(parseInt(snapshot.val().x.replace("px", "")))
        })
    })
    
    var player = {
        backgroundColor: "yellow",
        width: "50px",
        height: "50px",
        marginLeft: currentPos+"px"
    }
    return(
        <div style={player}>

        </div>
    )
}