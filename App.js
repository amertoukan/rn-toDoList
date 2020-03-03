import React, { useState } from 'react';
import { StyleSheet, View, Button, FlatList } from 'react-native';

import TaskItem from './components/TaskItem.jsx';
import TaskInput from './components/TaskInput.jsx';

export default function App() {
  const [ tasks, setTasks ] = useState([])
  const [ isAddMode, setIsAddMode ] = useState(false);

  const addInputHandler = (task) => {
    console.log(task)
      setTasks(currentTasks => [...currentTasks, {key: Math.random().toString(), value: task}])
      setIsAddMode(false)
    };

  const deleteTask = (taskID) => {
    setTasks( currentTasks => {
      return currentTasks.filter((task) => task.key !== taskID )
    })
  }
  
  const cancelInput = (params) => {
    setIsAddMode(false);
  }
  
  
  return (
    <View style={styles.container}>
      <Button title="Add New Task" onPress={() => setIsAddMode(true)}/>
      {/**
       *  INPUT FIELD
      */}
      <TaskInput
      isAddMode={isAddMode}
      addInputHandler={addInputHandler}
      cancelInputHandler={cancelInput}
      />
      
      {//<ScrollView>
}
      <FlatList
      keyExtractor={(item, index) => {
        item.key
      }}
      data={tasks} 
      renderItem={itemData => 
        <TaskItem 
        id={itemData.item.key} 
        onDelete={deleteTask} 
        title={itemData.item.value}
        />
        }>
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
});
