import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Btn = ({text, callback, color}) => {
  return (
    <Pressable 
        style={({pressed})=>[pressed?{opacity:0.7}:{opacity:1},styles.btn,{backgroundColor:color}]}
        onPress={callback}
    >
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  )
}

export default Btn

const styles = StyleSheet.create({
    btn:{
        width:300,
        height:60,
        borderRadius:12,
        alignItems:'center',
        justifyContent:'center'
    },
    text:{
        fontSize:24,
        fontWeight:'800',
        color:'#fff'
    }
})