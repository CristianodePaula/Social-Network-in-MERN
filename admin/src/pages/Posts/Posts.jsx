import React from 'react'
import SideBar from '../../components/SideBar/SideBar'
import TopBar from '../../components/TopBar/TopBar'
import styled from 'styled-components'
import { mobile } from '../../resources/Responsive'
import { DataGrid } from '@mui/x-data-grid';

export const Container = styled.div`
  display: flex;  
  ${mobile({
  flexDirection: 'column',
  minHeight: '100vh',

})}
`
export const Top = styled.div` 
  flex: 6;   
  ${mobile({
  flexDirection: 'column'
})}
`
export const Center = styled.div`

  ${mobile({
  flexDirection: 'column'
})}
`
export default function Posts() {

  
const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 90,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

  return (

    <Container>
      <SideBar />
      <Top>
        <TopBar />
        <Center>
        <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
      </div>
        </Center>
      </Top>
    </Container>

  )
}


/*

import React from 'react'
import SideBar from '../../components/SideBar/SideBar'
import TopBar from '../../components/TopBar/TopBar'
import styled from 'styled-components'
import {mobile} from '../../resources/Responsive'

export const Container = styled.div`
  display: flex;  
  background: grey;
  ${mobile({
    flexDirection: 'column',
    minHeight: '100vh',
  
  })}
`
export const Top = styled.div` 
  flex: 6;   
  ${mobile({
    flexDirection: 'column'
  })}
`
export const Center = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  ${mobile({
    flexDirection: 'column'
  })}
`
export default function Posts() {

  return (

    <Container>
        <SideBar />
      <Top>
        <TopBar />
        <Center>
          Posts
        </Center>
      </Top>
    </Container>

  )
}
*/