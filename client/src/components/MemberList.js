import React from 'react'
import { 
    List,
    Datagrid, 
    TextField,
     EditButton,
    DeleteButton,
    EmailField
 } from 'react-admin'

const MemberList = (props) => {
    return (
        <List {...props}>
        <Datagrid>
            <TextField source='id'/>
            <TextField source='name'/>
            <EmailField source='email'/>
            <EditButton basePath='/members'/>
            <DeleteButton basePath='/members'/>
        </Datagrid>
    </List>
    )
   
    }
    export default MemberList;

