import { StyleSheet, Text, View, Modal } from 'react-native'
import React from 'react'

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