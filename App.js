import { Button , StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

function shuffle(array) {
  let currentIndex = array.length, randomIndex
  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex--
    [ array[currentIndex], array[randomIndex] ] = [ array[randomIndex], array[currentIndex] ]
  }

  return array;
}

const arr = Array.from({length: 60}, (_, index) => index + 1)

const randomNumbers = shuffle(arr)

export default class extends React.Component{

  constructor (props) {
    super(props)
    this.state = {
      numeros: [
        randomNumbers[0],
        randomNumbers[1],
        randomNumbers[2],
        randomNumbers[3],
        randomNumbers[4],
        randomNumbers[5]
      ]
    }
  }

  render() {
    return(
      <View style = {styles.container}>
        <Text>{this.state.numeros[0]}</Text>
        <Text>{this.state.numeros[1]}</Text>
        <Text>{this.state.numeros[2]}</Text>
        <Text>{this.state.numeros[3]}</Text>
        <Text>{this.state.numeros[4]}</Text>
        <Text>{this.state.numeros[5]}</Text>
        <Button 
        title="OK"
        onPress={() => {
          let newRandomNumbers = shuffle(arr)
          this.setState({
          numeros: [
            newRandomNumbers[0],
            newRandomNumbers[1],
            newRandomNumbers[2],
            newRandomNumbers[3],
            newRandomNumbers[4],
            newRandomNumbers[5]
          ]
         })
        }}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
 