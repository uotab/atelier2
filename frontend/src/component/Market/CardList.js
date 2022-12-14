import React, { useEffect, useState } from 'react';
import {Card} from '../Card/containers/Card';
import { CardLineDisplay } from '../Card/components/CardLineDisplay';
import { View, ScrollView} from 'react-native'
import { List, ListItem} from 'semantic-ui-react';


export const CardList=(props) =>{
    var [rows, setRows] = useState([])

    useEffect(() => {
    fetch("http://tp.cpe.fr:8083/cards")
    .then((response) => response.json())
    .then((data) =>{
        setRows(data)
        
    });
    
},[])


let display = rows.map((item)=>{
    console.log(item)
    return < Card name={item.name} money={item.price} display_type="LINE_LABEL"> </Card>;
});

return (display);
    
}
