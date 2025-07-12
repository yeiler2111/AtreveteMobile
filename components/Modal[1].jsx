import React from 'react'
import { Modal, StyleSheet } from 'react-native'

const ModalComponent = ({children,setModal,modal}) => {
  return (
    <Modal
        visible={modal}
        animationType='slide'
        transparent={true}
    >
      {children}
    </Modal>
  )
}

export default ModalComponent

const styles = StyleSheet.create({})