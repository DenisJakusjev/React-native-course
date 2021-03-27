import React from 'react';
import { Text, View } from 'react-native';

export default function FlexBoxRNGuide() {
  return (
     //Parent Flex container 
    <View style={{ 
        paddingTop:10,
        flexDirection:"row",
        justifyContent: 'space-between',
        alignItems: 'center',
    }}>
        {/* Childs */}
      <View
        style={{
          backgroundColor: 'red',
          flex:1,
          height: 100,
          justifyContent: 'center',
          alignItems: 'center',
         
        }}
      >
        <Text>1</Text>
      </View>
      <View
        style={{
          backgroundColor: 'blue',
          flex:2,
          height: 100,
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Text>2</Text>
      </View>
      <View
        style={{
          backgroundColor: 'green',
          flex:1,
          height: 100,
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Text>3</Text>
      </View>
    </View>
  );
}
