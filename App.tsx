import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const  [nome, setNome] = useState<string>("Joao Silva");


export default function App() {
  return (
    <View style={styles.container}>

      <Text>{nome}</Text>
      <Button title="Trocar Nome" onPress={() =>{
        setNome("Jose Santos");
        console.log("Nome: ", nome);
      }}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
