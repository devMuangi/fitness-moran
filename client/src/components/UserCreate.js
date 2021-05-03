import React from 'react'
import { Create, SimpleForm, TextInput, DateInput} from 'react-admin'

const UserCreate = (props) => {
    return (
        <Create title="Create a user" {...props}>
            <SimpleForm>
                <TextInput source='title'/>
                <TextInput source='name'/>
                <TextInput source='email'/>
                <DateInput label='Published' source='publishedAt'/>
            </SimpleForm>   
        </Create>
    )
}

export default UserCreate
