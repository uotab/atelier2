import React, { useEffect, useState } from 'react';
import {Card} from '../Card/containers/Card';
import { CardLineDisplay } from '../Card/components/CardLineDisplay';
import { View, ScrollView} from 'react-native'
import { List, ListItem} from 'semantic-ui-react';


export const CardList=(props) =>{
    const queryParameters = new URLSearchParams(window.location.search)
    const marketMode = queryParameters.get("mode")
    var [rows, setRows] = useState([])
    var url = marketMode==='buy' ? 'http://vps.cpe-sn.fr:8083/cards' : 'http://vps.cpe-sn.fr:8083/cards_to_sell';

    useEffect(() => {
    fetch(url)
    .then((response) => response.json())
    .then((data) =>{
        setRows(data)
        
    });
    
},[])


let display = rows.map((item)=>{
    return  < Card key = {item.id}
            onClick={()=>props.setSelectedCard(item)}
            imgUrl={item.imgUrl} 
            id={item.id} 
            name={item.name} 
            energy={item.energy} 
            hp={item.hp} 
            defence={item.defence} 
            attack={item.attack} 
            money={item.price} 
            display_type="LINE_LABEL">
            </Card>;
});

return (display);
    
}
