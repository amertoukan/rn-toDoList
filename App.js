import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';

export default function App() {
  const [newTask, setNewTask] = useState();
  const [tasks, setTasks] = useState([])

  const taskInputHandler = enteredText => {
    setNewTask(enteredText)
  }

  const addInputHandler = () => {
    setTasks(currentTasks => [...currentTasks, {key: Math.random().toString(), value: newTask}])
  };
  return (
    <View style={styles.container}>
  <View
  style={styles.inputContainer}
  >
    <TextInput 
      placeholder="Enter new task" 
      style={styles.textInput}
      onChangeText={taskInputHandler}
      value = {newTask}
    />
    <Button title="ADD" style={styles.button} onPress={addInputHandler}/>
      </View>
      {//<ScrollView>
}
      <FlatList
      keyExtractor={(item, index) => {
        item.key
      }}
      data={tasks} 
      renderItem={itemData => 
        <View style={styles.listItem}>
        <Text>{itemData.item.value}</Text>
        </View>}>
      </FlatList>

{//</ScrollView>
}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  textInput: {
    borderColor:'black',
    borderWidth: 0.8,
    width: '80%',
    padding: 10
  },
  button: {
    marginTop: 30
  },
  listItem:{
    padding: 10,
    marginVertical: 10,
    backgroundColor:'#ccc',
    borderColor: 'black',
    borderWidth: 1
  },
});
