import React, { useState } from 'react';import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import { Navigation } from '../../Navigation/navigation';
import { CardBoard } from '../components/CardBoard';
import { Grid, Segment } from 'semantic-ui-react';
import { CardFull } from '../components/CardFull';
import { Socket } from "socket.io-client";
import { Chat } from '../../Chat/chat';

            
            

const socket = io('http://localhost:8084');
export const Game = (props)=>{
  const [text, setText] = useState(<Navigation />);
  socket.on("connect", () => {
      setText(<><Navigation /><Chat socket={socket} /></>);
  });

    return (
      <><>{text}</><Grid divided='vertically'>
        <Grid.Row columns={3}>
          <Grid.Column>

            <Segment></Segment>

          </Grid.Column>

          <Grid.Column>
            <Grid divided='horizontally'>
              <Grid.Row rows={2}>

                <Segment>
                  <CardBoard>
                  </CardBoard>
                </Segment>
              </Grid.Row>
              <Grid.Row>

                <Segment>
                  <CardBoard>
                  </CardBoard>
                </Segment>
              </Grid.Row>
            </Grid>
          </Grid.Column>

          <Grid.Column>
            <Grid divided='horizontally'>
              <Grid.Row rows={2}>

                <Segment>
                  <CardFull>
                  </CardFull>
                </Segment>
              </Grid.Row>
              <Grid.Row>

                <Segment>
                  <CardFull>
                  </CardFull>
                </Segment>
              </Grid.Row>
            </Grid>
          </Grid.Column>

        </Grid.Row>
      </Grid></>
    
      
       
              );
            }
    
