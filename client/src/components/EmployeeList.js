import React from 'react'
import { 
    List,
    Filter,
    Datagrid, 
    TextField,
     EditButton,
    DeleteButton,
    EmailField,
    ReferenceInput,
    SelectInput,
    TextInput

 } from 'react-admin'

 const EmployeeFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
        <ReferenceInput label="Employee" source="id" reference="employees" allowEmpty>
            <SelectInput optionText="name" />
        </ReferenceInput>
    </Filter>
);

const EmployeeList = (props) => {
    return (
        <List filters={<EmployeeFilter />} {...props}>
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

