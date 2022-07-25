import React from 'react'
import SideBar from '../../components/SideBar/SideBar'
import TopBar from '../../components/TopBar/TopBar'
import styled from 'styled-components'
import { mobile } from '../../resources/Responsive'
import { Link } from 'react-router-dom'
import { users } from '../../resources/Data'

export const Container = styled.div`
  display: flex;  
  ${mobile({
  flexDirection: 'column',
  minHeight: '100vh',

})}
`
export const Wrapper = styled.div` 
  flex: 6;  
  ${mobile({
  flexDirection: 'column'
})}
`
export const Center = styled.div`
  padding: 40px;
`
export const Table = styled.table`
  border-collapse: collapse;
  text-align: center;
  border-radius: 15px;
  overflow: hidden;
`
export const THead = styled.thead`
    position: sticky;
    z-index: 100;
`
export const THeadTR = styled.tr`
    background: grey;
`
export const TH = styled.th`
    font-weight: normal;
    padding: 10px;
    color: white;
    text-transform: capitalize;
    font-weight: 600;
    font-size: 14px;
    :not(:last-of-type) {
        border-right: 1px solid black;
    }
    :first-of-type {
        width: 1%;
        white-space: nowrap;
    }
    ${mobile({
  fontSize: '8px'
})}
`
export const TBody = styled.tbody``
export const TBodyTR = styled.tr`
    background: gainsboro;
`
export const TD = styled.td`
  padding: 10px;
  border: 1px solid grey;
  font-size: 14px;
  ${mobile({
  fontSize: '7px',
})}
`
export const Img = styled.img`
  height: 100px;
  width: 100px;
  border-radius: 50%;
  object-fit:cover;
  ${mobile({
  height: '20px',
  width: '20px'
})}
`
export const BtnCreate = styled.button`
  background: blue;
  width: 80px;
  padding: 5px;
  color: white;
  border: 1px solid grey;
  border-radius: 5px;
  margin-bottom: 40px;
  transition: 0.5s ease-in-out;
  &:hover {
    transform: scale(1.1)
  }
  ${mobile({
  width: '40px',
  height: '20px',
  fontSize: '8px',
})}
`
export const BtnEdit = styled.button`
  background: red;
  width: 80px;
  padding: 5px;
  color: white;
  border: 1px solid grey;
  border-radius: 5px
  transition: 0.5s ease-in-out;
  &:hover {
    transform: scale(1.1)
  }
  ${mobile({
  width: '40px',
  height: '20px',
  fontSize: '8px',
})}
`
export default function Users() {

  return (

    <Container>
      <SideBar />
      <Wrapper>
        <TopBar />
        <Center>
          <Link to={"/newuser"}>
            <BtnCreate
              type='button'
              className='btnEdit'
            > Criar
            </BtnCreate>
          </Link>
          <Table>
            <THead>
              <THeadTR>
                <TH>Imagem</TH>
                <TH>Nome</TH>
                <TH>Email</TH>
                <TH>ID</TH>
                <TH>Modificar</TH>
              </THeadTR>
            </THead>
            <TBody>
              {users.map((user) => {
                return (
                  <TBodyTR key={user.id}>
                    <TD>
                      <Img src={user.profilePic
                        ||
                        "https://crowd-literature.eu/wp-content/uploads/2015/01/no-avatar.gif"
                      } />
                    </TD>
                    <TD>{user.username}</TD>
                    <TD>{user.email}</TD>
                    <TD>{user._id}</TD>
                    <TD>
                      <BtnEdit

                        type="button"
                      > Excluir
                      </BtnEdit>
                    </TD>
                  </TBodyTR>
                )
              })}
            </TBody>
          </Table>
        </Center>
      </Wrapper>
    </Container>

  )
}



