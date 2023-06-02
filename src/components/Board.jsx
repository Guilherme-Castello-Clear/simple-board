import React from "react";
export default props => {
    return(
        <div style={{backgroundColor: 'red', height: '500px', width: '500px'}}>
            {props.children}
        </div>
    )
}