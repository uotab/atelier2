import React, { useEffect, useState } from 'react';
import {Card} from '../Card/containers/Card';
import { Button } from 'semantic-ui-react';
import  {Home}  from '../Home/home';

export const CardToBuy = (props) =>{

      let button;
      const card = props.selectedCard;
      if (props.isBuy){
        button = <Button
         type="submit"
         fullWidth
         variant="contained"
         sx={{ mt: 3, mb: 2 }}>
         Buy
          </Button>
       } else {
         button = <Button
         type="submit"
         fullWidth
         variant="contained"
         sx={{ mt: 3, mb: 2 }}>
         Sell
          </Button>
       }

  return ( 
    <div>{card && (
    <><Card 
      imgUrl={props.selectedCard.imgUrl}
      name={props.selectedCard.name}
      money={props.selectedCard.price}
      display_type="SIMPLE_LABEL">
      </Card>
          
      {button}</>
      
      )}</div>

  )

}

