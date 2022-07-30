import React from "react"
import { Modal, useMantineTheme } from "@mantine/core"
import FriendsOnline from '../FriendsOnline/FriendsOnline'

const FollowersModal = ({ modalOpened, setModalOpened }) => {
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
      opened={modalOpened}
      onClose={() => setModalOpened(false)}
    >
    <FriendsOnline location='modal'/>
    </Modal>
  )
}

export default FollowersModal
