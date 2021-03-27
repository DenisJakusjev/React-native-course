import React from 'react';
import { ScrollView, Text, View } from 'react-native';

export default function ScrollViewHorizontal() {
  return (
     //Parent Flex container 
    <ScrollView horizontal={true} >
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
          width: 100,
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
          width: 100,
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
          width: 100,
          height: 100,
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Text>3</Text>
      </View>
      <View
        style={{
          backgroundColor: 'red',
          width: 100,
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
          width: 100,
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
          width: 100,
          height: 100,
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Text>3</Text>
      </View>
      <View
        style={{
          backgroundColor: 'red',
          width: 100,
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
          width: 100,
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
          width: 100,
          height: 100,
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Text>3</Text>
      </View>
      </View>
    </ScrollView>
  );
}
