import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React, {useState} from 'react';

export default function App() {
 
  const [joke, setJoke] = useState('')
  const [punchline, setPunchline] = useState('')
  const [loading, setLoading] = useState('Get Joke')

  const getJoke = async () => {
    try {
      setLoading('Generating Joke...')
      let response = await fetch('https://official-joke-api.appspot.com/random_joke');
      let data = await response.json();
      // console.log(data)
      setJoke( data.setup );
      setPunchline(data.punchline)
      setLoading('Get Joke.')
  } catch (error) {
    alert('There is an error:' + error);
    // console.error(error)
  }
}
  return (
    <View style={styles.container}>
      <Text>{joke}</Text>
      <Text>{punchline}</Text>
      <Button title={loading} onPress={getJoke}/>
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
