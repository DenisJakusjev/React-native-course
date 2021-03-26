import React, {useState} from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';

export default function App() {
  //default hook
  const [outputText, setOutputText] = useState("TheFlinT");
  return (
    //Div
    <View style={styles.container}>
      {/* <p> */}
      <Text>{outputText}</Text>
      {/* Button only takes 1 prop that is tittle, cant be CSSed */}
      <Button title="Change Text" onPress={()=>setOutputText("GLADIATOR")}/>
    </View>
  );
}

//CSS like
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
