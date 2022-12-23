import React, { useEffect, useState } from 'react';
import {Card} from '../../Card/containers/Card';
import { CardBoardDisplay } from '../../Card/components/CardBoardDisplay';



export const CardBoard=(props) =>{
    var [columns, setColumns] = useState([])
    
    

    useEffect(() => {
    fetch("http://vps.cpe-sn.fr:8083/cards")
    .then((response) => response.json())
    .then((data) =>{
        setColumns(data)
        
    });
    
},[])

let i=0;
let render=[];
 columns.map((props)=>{
    i=i+1;
    console.log(props)
    console.log(i)
    if (i<5) {
    render.push(<div className="four wide column centered" >
        < Card key={i} name={props.name} url={props.smallImgUrl} energy={props.energy} hp={props.hp} display_type="BOARD_LABEL"> </Card>
        </div>)}
});

let display = (
            <div className="CardBoard ui grid block-container">
                {render}
            </div>
        );

return display;
    
}
