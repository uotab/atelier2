import React from 'react';
import { Feed, Icon } from 'semantic-ui-react'

 export const UserShortDisplay=(props)=>{
   return (
            <Feed>
                <Feed.Event>
                    <Feed.Label>
                        <img src={props.img} />
                    </Feed.Label>
                <Feed.Content>
                <Feed.Summary>
                <a>{props.login}</a>
                </Feed.Summary>
                    
                </Feed.Content>
                
                </Feed.Event>
            </Feed>
            );
    }