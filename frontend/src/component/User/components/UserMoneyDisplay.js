import React from 'react';
import { Feed, Icon } from 'semantic-ui-react'

 export const UserMoneyDisplay=(props) =>{
    return (
        <Feed>
        <Feed.Event>
        <Feed.Content>
        <Feed.Meta>
            <Feed.Like>
            <Icon name='money bill alternate outline' />{props.money}
            </Feed.Like>
        </Feed.Meta>
            
        </Feed.Content>
        
        </Feed.Event>
    </Feed>
    );
}
