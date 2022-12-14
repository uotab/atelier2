import React, { useState } from 'react';
import { User } from '../User/containers/User';
import { Grid, Segment,Container } from 'semantic-ui-react';

export const Navigation = (props)=>{
    let [currentUser,setCurrentUser]= useState([]);

    return (
<Container>
    <Grid divided='vertically'>
      <Grid.Row columns={3}>
        <Grid.Column>
          <Segment>
          <User 
                 id={currentUser.id}
                  login={currentUser.login}
                  pwd={currentUser.pwd}
                  money={currentUser.money}
                  img={currentUser.img}
                  display_type='MONEY'>
          </User>
          </Segment>
        </Grid.Column>
        <Grid.Column>

        </Grid.Column>
        <Grid.Column>
          <User id={currentUser.id}
                  surname={currentUser.surname}
                  lastname={currentUser.lastname}
                  login={currentUser.login}
                  pwd={currentUser.pwd}
                  money={currentUser.money}
                  img={currentUser.img}
                  display_type='SHORT'>
          </User>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Container>


    );
}