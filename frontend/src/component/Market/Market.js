import React, { useEffect, useState } from 'react';
import { Grid, Segment,Menu } from 'semantic-ui-react'
import { CardList } from './CardList';
import { Card } from '../Card/containers/Card';
import { Button } from 'semantic-ui-react';
import { CardToBuy } from './CardToBuy';
import { useDispatch } from 'react-redux';
import { updateCard } from '../../actions';


//Create function component
export const Market =(props) =>{ 
    const [selectedCard, setSelectedCard] = useState(null); 
    const queryParameters = new URLSearchParams(window.location.search)
    const marketMode = queryParameters.get("mode")

    return (
      <>
        <Menu>
          <Menu.Item
            name='market'
          >
            {`Market${marketMode==='buy'? ' Buy': ' Sell'}`}
          </Menu.Item>
        </Menu>
        <Grid divided='vertically'>
          <Grid.Row columns={2}>
          <Grid.Column>
            <Segment>
            <CardList setSelectedCard = {setSelectedCard}/> 
            </Segment>
          </Grid.Column>
          <Grid.Column>
        <CardToBuy selectedCard = {selectedCard}
        isBuy = {marketMode==='buy' || false}/>
          </Grid.Column>
          </Grid.Row>
        </Grid>
      </>
    );
}
