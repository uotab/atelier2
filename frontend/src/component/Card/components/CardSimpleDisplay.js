import React from 'react';
import { Card, Image, Icon } from 'semantic-ui-react';

 export const CardSimpleDisplay=(props) =>{
    return (
        <Card>
            <img src={props.img} ></img>
            <Card.Content>
                <Card.Header>{props.name}</Card.Header>
            </Card.Content>
            <Card.Content extra>
                    <a>
                        <Icon name='money bill alternate outline' />
                            {props.money} $
                    </a>
            </Card.Content>
        </Card>

        );
}
