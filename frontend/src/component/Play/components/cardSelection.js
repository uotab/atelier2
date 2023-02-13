import React from "react";

export const CardSelection = (props)=>{
    function startGame(){
        props.startGameHandle();
    }

    return(<div>
        <br></br>
        <button onClick={() => startGame()}type="button" className="btn  btn-custom">Start game</button>
    </div>);
}
