import React from 'react';
import { View, ScrollView} from 'react-native';
import { List, ListItem} from 'semantic-ui-react';
import { Table, TableRow, TableCell } from '@mui/material'

export const CardLineDisplay=(props) =>{


    return (
        <Table>
            <TableRow onClick = {props.onClick}>
                <TableCell><img src={props.imgUrl} height = "25" ></img></TableCell>
                <TableCell>{props.id}</TableCell>
                <TableCell>{props.name}</TableCell>
                <TableCell>{props.energy}</TableCell>
                <TableCell>{props.hp}</TableCell>
                <TableCell>{props.defence}</TableCell>
                <TableCell>{props.attack}</TableCell>
                <TableCell>{props.money} $</TableCell>
            </TableRow>
        </Table>

        );
}