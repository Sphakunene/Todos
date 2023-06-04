import  {useState} from 'react';
import { StyleSheet, Text, TextInput, Button,View } from 'react-native';


export default function AddTodos({submitHandler}){
    const [text,setText] =useState('');
    
    const changeHandler =(val)=>{
        setText(val);
    }
    return(
        <View>
            <TextInput style ={styles.input} placeholder='add todo'
            onChangeText={changeHandler}
            />
            <Button onPress={()=>{
                submitHandler(text);
            }} title='add to do' color='coral'/>
        </View>
    );
}

const styles= StyleSheet.create({
    input:{
        marginBottom:10,
        paddingHorizontal:8,
        paddingVertical:6,
        borderBottomColor:'#ddd',
        borderBottomEndRadius:1,
    }
});