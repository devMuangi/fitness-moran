import React from 'react'
import { Create, SimpleForm, TextInput, DateInput} from 'react-admin'

const MemberCreate = (props) => {
    
    return (
        <Create title="Add a member" {...props}>
            <SimpleForm>
                <TextInput source='name'/>
                <TextInput source='email'/>
                <DateInput label='joined on' source='publishedAt'/>
            </SimpleForm>   
        </Create>
    )
}

export default MemberCreate
