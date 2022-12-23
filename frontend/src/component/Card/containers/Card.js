import React from 'react';
import {CardSimpleDisplay} from '../components/CardSimpleDisplay';
import {CardLineDisplay} from '../components/CardLineDisplay'
import { CardBoardDisplay } from '../components/CardBoardDisplay';
import { CardFullDisplay } from '../components/CardFullDisplay';
import { updateCurrentCard } from '../../../actions';
import { useDispatch } from "react-redux";

const LINE_LABEL='LINE_LABEL';
const SIMPLE_LABEL='SIMPLE_LABEL';
const BOARD_LABEL='BOARD_LABEL';
const FULL_LABEL='FULL_LABEL';

export const Card=(props)=> {
    let dispatch=useDispatch();

    function handleOnClick(){
        dispatch(updateCurrentCard(props.card));
    }
    

    if(props == undefined){
        return (<></>);
    }
    let display="";
    switch(props.display_type){
        case SIMPLE_LABEL:
            display = (      
                <CardSimpleDisplay
                    img = {props.img}
                    name={props.name}
                    money={props.money}>
                </CardSimpleDisplay>

            );

            break;
        case LINE_LABEL:
            display=(                
                <CardLineDisplay
                    onClick = {props.onClick}
                    imgUrl={props.imgUrl}
                    id={props.id}
                    name={props.name}
                    energy={props.energy}
                    hp={props.hp}
                    defence={props.defence}
                    attack={props.attack}
                    money = {props.money}>
                </CardLineDisplay>
            );
            break;
        
        case BOARD_LABEL:
            display = (
                <div onClick={handleOnClick}>
                <CardBoardDisplay 
                    name={props.name}
                    url={props.smallImgUrl}
                    energy={props.energy}
                    hp={props.hp}>
                </CardBoardDisplay>
                </div>
            );
            break;

        case FULL_LABEL:
            display = (
                <CardFullDisplay
                    name={props.name}
                    url={props.imgUrl}
                    energy={props.energy}
                    hp={props.hp}
                    description={props.description}
                    family={props.family}
                    attack={props.attack}
                    defense={props.defense}
                    money={props.money}>
                </CardFullDisplay>
            );
            break;
        default:
            display=(<h4>No Display Available</h4>);
    }
        return display;
    }
