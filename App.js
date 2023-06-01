import { useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';

export default function App() {

  const [todos, setTodos] = useState([
    { text: 'buy Coffee', key: '1' },
    { text: 'creat an app', key: '2' },
    { text: 'go to gym', key: '3' },
  ]);
  return (
    <View style={styles.container}>
      <Header/>
      <View style={styles.content}>
        <View style={styles.list}>
          <FlatList data={todos} 
          renderItem={({item}) => (
            <Text>{item.text}</Text>
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