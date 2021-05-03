import React from 'react'
import { Admin, Resource } from 'react-admin'
import restProvider from 'ra-data-simple-rest'
import PostList from './components/PostList'
import PostCreate from './components/PostCreate'
import PostEdit from './components/PostEdit'
import MemberList from './components/MemberList'
import MemberCreate from './components/MemberCreate'
import MemberEdit from './components/MemberEdit'
import EmployeeList from './components/EmployeeList'
import EmployeeCreate from './components/EmployeeCreate'
import EmployeeEdit from './components/EmployeeEdit'




function App() {
  return <Admin dataProvider={restProvider('http://localhost:3000')}>
    <Resource name='posts' list={PostList} create={PostCreate} edit={PostEdit}/>
    <Resource name='members' list={MemberList} create={MemberCreate} edit={MemberEdit}/>
    <Resource name='employees' list={EmployeeList} create={EmployeeCreate} edit={EmployeeEdit}/>

  </Admin>
  
}

export default App;
