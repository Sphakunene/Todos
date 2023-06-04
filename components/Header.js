import {StyleSheet, Text, View } from 'react-native';
import { styleProps } from 'react-native-web/dist/cjs/modules/forwardedProps';

export default function Header(){
    return(
        <View style={styles.header}>
            <Text style={styles.title}>Todo</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    header:{
        marginTop:12,
        height:70,
        paddingTop:18,
        backgroundColor:"coral",
    },
    title:{
        textAlign:"center",
        fontSize:23,
        fontWeight:"bold",
        color:"white",

    }

});