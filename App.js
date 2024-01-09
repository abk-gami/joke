import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React, {useState} from 'react';

export default function App() {
 
  const [joke, setJoke] = useState('')

  const getJoke = async () => {
    try {
      // let response = await fetch("http://api.icndb.com/jokes/?escape=html&limitTo=[nerdy]")
      // if (!response.ok) throw new Error(response.statusText);
      // let data = await response.json();
      // console.log(data.value.joke)
      // setJoke(data.value.joke)
      // } catch (error) {
      //   alert(`Algo deu errado: ${error}`)
    // }

      let response = await fetch('https://official-joke-api.appspot.com/random_joke');
      let data = await response.json();
      setJoke( data.setup + '\n' + data.punchline);
  } catch (error) {
    // alert(`Erro ao buscar o chiste: ${error}`);
    console.error(error)
  }
}
  return (
    <View style={styles.container}>
      <Text>Get Joke</Text>
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
