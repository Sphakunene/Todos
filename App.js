import { useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import TodoItems from './components/TodoItem';

export default function App() {

  const [todos, setTodos] = useState([
    { text: 'buy Coffee', key: '1' },
    { text: 'creat an app', key: '2' },
    { text: 'go to gym', key: '3' },
  ]);

  const pressHandler = (key)=>{
    setTodos((prevTodos)=>{
      return prevTodos.filter(todo => todo.key!=key)
    })
  }
  return (
    <View style={styles.container}>
      <Header/>
      <View style={styles.content}>
        <View style={styles.list}>
          <FlatList data={todos} 
          renderItem={({item}) => (
          <TodoItems item={item} pressHandler={pressHandler}/>
          )}
          
          />
        </View> 


      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content:{
    padding:40,
  },
  list:{
    margin:20,
  }

});
