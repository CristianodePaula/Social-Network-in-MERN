import { Modal, useMantineTheme } from "@mantine/core"
import styled from 'styled-components'

export const H3 = styled.div`
    font-size: 20px;
`
export const Input = styled.input`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px;
    border-radius: 5px;
    border: none;
    background: gainsboro;
    padding-left: 5px;
    height: 25px;
`
export const BoxImg = styled.div`
    display: flex;
`
export const InputImg = styled.input`
    font-size: 10px;
`
export const Button = styled.button`
    background: red;
    color: white;
    border-radius: 5px;
    bordeR: none;
    padding: 10px;
    font-size: 15px;
    margin-top: 15px;
`

function ProfileEdit({ editOpened, setEditOpened }) {

  
  const theme = useMantineTheme()

  return (
    <Modal
      overlayColor={
        theme.colorScheme === "dark"
          ? theme.colors.dark[9]
          : theme.colors.gray[2]
      }
      overlayOpacity={0.55}
      overlayBlur={3}
      size="55%"
      opened={editOpened}
      onClose={() => setEditOpened(false)}
    >
      <form className="infoForm">
        <H3>Editar Informações</H3>
          <Input
            type="text"
            name="Name"
            placeholder=" Nome"
          />
        <div>
          <Input
            type="text"
            name="works"
            placeholder="Ocupação"
          />
        </div>
        <div>
          <Input
            type="text"
            name="livesIN"
            placeholder="Cidade"
          />
        </div>
        <div>
          <Input
            type="text"
            placeholder="Relacionamento"
          />
        </div>
        <BoxImg>
            Imagem de Perfil
            <InputImg type="file" name='profileImg'/>
            Imagem de Fundo
            <InputImg type="file" name="coverImg" />
        </BoxImg>
        <Button>Atualizar</Button>
      </form>
    </Modal>
  )
}

export default ProfileEdit