import { useState } from 'react';
import { FlatList, StyleSheet, Text, View,Alert } from 'react-native';
import Header from './components/Header';
import TodoItems from './components/TodoItem';
import AddTodos from './components/AddTodos';

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

  const submitHandler =(text) =>{
    if(text.length>3){
      setTodos((prevTodos)=>{
        return  [{text:text,key: Math.random().toString()},...prevTodos];
       })
    }
    else{
        Alert.alert('OOPS','TODOS must be over 3 char longe',
        [{text:'Understood',onPress:()=>{console.log('Alert Closed')}}]
        )
    }
    
  }
  return (
    <View style={styles.container}>
      <Header/>
      <View style={styles.content}>
        <AddTodos submitHandler={submitHandler} />
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
    flex:1,
    padding:40,
  },
  list:{
    margin:20,
    flex:1,
  }

});
