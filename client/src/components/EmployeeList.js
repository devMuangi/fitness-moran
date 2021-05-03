import React from 'react'
import { 
    List,
    Datagrid, 
    TextField,
     EditButton,
    DeleteButton,
    EmailField
 } from 'react-admin'

const EmployeeList = (props) => {
    return (
        <List {...props}>
        <Datagrid>
            <TextField source='id'/>
            <TextField source='name'/>
            <EmailField source='email'/>
            <EditButton basePath='/employees'/>
            <DeleteButton basePath='/employees'/>
        </Datagrid>
    </List>
    )
   
    }
    export default EmployeeList;

