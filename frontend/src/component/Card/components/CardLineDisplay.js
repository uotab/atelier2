import React from 'react';
import { View, ScrollView} from 'react-native';
import { List, ListItem} from 'semantic-ui-react';
import { Table, TableRow, TableCell } from '@mui/material'

 export const CardLineDisplay=(props) =>{
    return (
        <Table>
            <TableRow>
                <TableCell>{props.name}</TableCell>
                <TableCell>{props.money} $</TableCell>
            </TableRow>
        </Table>

        );
}