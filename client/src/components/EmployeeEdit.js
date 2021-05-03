import React from 'react'
import { Edit, SimpleForm, TextInput } from 'react-admin'

const EmployeeEdit = (props) => {
    return (
        <Edit title="Edit post" {...props}>
            <SimpleForm>
                <TextInput disabled source='id'/>
                <TextInput source='name'/>
                <TextInput source='email'/>
                {/* <DateInput label='Published' source='publishedAt'/> */}
            </SimpleForm>   
        </Edit>
    )
}

export default EmployeeEdit
