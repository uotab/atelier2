import React, {component} from 'react';
import {CardSimpleDisplay} from '../Card/CardSimpleDisplay'


export const RightSide =(props) =>{
return(
        <div>
            <CardSimpleDisplay
                card = {props.CardSimpleDisplay}
            />
             <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              "buy or sell"
               </Button>
        </div>
       
)
}


