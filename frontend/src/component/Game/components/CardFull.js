import React, { useEffect, useState } from 'react';
import Card from '../../Card/containers/Card';
import { useSelector } from 'react-redux';
import { CardBoard } from './CardBoard';
import { CardBoardDisplay } from '../../Card/components/CardBoardDisplay';
import { View, ScrollView} from 'react-native'
import { List, Listcard} from 'semantic-ui-react';


export const CardFull=(props) =>{

    let current_card = useSelector(state => state.gameReducer.card)

    if (current_card == undefined){
        return (<></>);
    }

    return(
        <div>
           {current_card}
        </div>
    )

    /*function Handlecardselect(card){
        setCard({cardselected:card});
        props.oncardselect(card);
    }


    var [card, setCard] = useState([])

    let display = (
        <div className="CardFull ui grid middle aligned">
            <div className="four wide column">
            < Card name={card.name} url={card.imgUrl} energy={card.energy} hp={card.hp} description={card.description} family={card.family} attack={card.attack} defense={card.defense} money={card.money} display_type="FULL_LABEL"> </Card>
            </div>
        </div>
    );
    return display;
/*


 useEffect(() => {
    fetch("http://vps.cpe-sn.fr:8083/card")
    .then((response) => response.json())
    .then((data) =>{
        setColumns(data)
        
    });
    
},[])

let i=0;
let display=[];
 columns.map((card)=>{
    i=i+1;
    console.log(card)
    console.log(i)
    display.push((< Card key={i} name={card.name} url={card.imgUrl} energy={card.energy} hp={card.hp} description={card.description} family={card.family} attack={card.attack} defense={card.defense} money={card.money} display_type="FULL_LABEL"> </Card>));
});

return (<>{display}</>);*/
    
}
