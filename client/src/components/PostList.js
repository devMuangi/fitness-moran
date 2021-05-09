import React from 'react'
import { 
    List,
    Datagrid, 
    TextField,
     DateField,
     EditButton,
    DeleteButton,
    SimpleList,
 } from 'react-admin';

 import { useMediaQuery } from '@material-ui/core';

const PostList = (props) => {
    const isSmall = useMediaQuery(theme => theme.breakpoints.down('sm'));
    return (
        <List {...props}>
           {isSmall ? (
                <SimpleList>
                <DateField source='publishedAt'/>
                <EditButton basePath='/posts'/>
                <DeleteButton basePath='/posts'/>
                </SimpleList>
           ) : (
            <Datagrid>
            <TextField source='id'/>
            <TextField source='title'/>
            <DateField source='publishedAt'/>
            <EditButton basePath='/posts'/>
            <DeleteButton basePath='/posts'/>
        </Datagrid>
             )}
    </List>
    );
   
    }
    export default PostList;

