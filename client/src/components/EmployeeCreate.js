import React from 'react'
import { Create, SimpleForm, TextInput, DateInput} from 'react-admin'

const EmployeeCreate = (props) => {
    
    return (
        <Create title="Add employee" {...props}>
            <SimpleForm>
                <TextInput source='name'/>
                <TextInput source='email'/>
                <DateInput label='joined on' source='publishedAt'/>
            </SimpleForm>   
        </Create>
    )
}

export default EmployeeCreate

