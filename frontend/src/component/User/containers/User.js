import React from 'react';
import {UserMoneyDisplay} from '../components/UserMoneyDisplay';
import {UserShortDisplay} from '../components/UserShortDisplay'

const MONEY_LABEL='MONEY';
const SHORT_LABEL='SHORT';

export const User=(props)=> {
    let display="";
    switch(props.display_type){
        case SHORT_LABEL:
            display = (                
                <UserShortDisplay 
                    login = {props.login}
                    img = {props.img}> 
                </UserShortDisplay>
            );

            break;
        case MONEY_LABEL:
            display=(                
                <UserMoneyDisplay 
                    money = {props.money}>
                </UserMoneyDisplay>
            );
            break;
        default:
            display=(<h4>No Display Available</h4>);
    }
        return display;
    }

