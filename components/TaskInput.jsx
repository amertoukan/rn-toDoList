import React, { useState } from 'react'
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native';

export default function TaskInput(props) {
    const [newTask, setNewTask] = useState();
 
    const taskInputHandler = enteredText => {
        setNewTask(enteredText)
      }

    const addInput = (params) => {
        props.addInputHandler(newTask);
        setNewTask ('');
    };
  const cancelInput = () => {
    props.cancelInputHandler();
    setNewTask ('');
};

    return (
    <Modal visible={props.isAddMode} animationType="slide">
    <View
    style={styles.inputContainer}
    >
    
    <TextInput 
      placeholder="Enter new task" 
      style={styles.textInput}
      onChangeText={taskInputHandler}
      value = {newTask}
    />
    <View style={styles.buttonContainer}>

    <View style={styles.button}>
        <Button title="Add" onPress={addInput}/>
    </View>
    <View style={styles.button}>
    <Button title="Cancel" color='red' onPress={cancelInput}/>
    </View>
    </View>
    </View>
    </Modal>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      },
      textInput: {
        borderColor:'black',
        borderWidth: 0.8,
        width: '80%',
        padding: 10,
        marginBottom: 10
      },
      buttonContainer:{
          flexDirection: 'row',
          justifyContent:'space-between',
          width: '70%'
      },
      button: {
        width: '40%'
      }
})
