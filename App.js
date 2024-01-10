import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import React, {useState} from 'react';
import { LinearGradient } from 'expo-linear-gradient';

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
      setLoading('Get Joke')
  } catch (error) {
    alert('There is an error:' + error);
    // console.error(error)
  }
}
return (
  
    <View 
    style={styles.container}
    >
       <LinearGradient
        // Background Linear Gradient
        colors={['#970d1a', '#4e204d']}
        style={styles.linear}
      >
        <View style={styles.whiteSpace}>
      <Text style={styles.joke}>{joke}</Text>
      <Text style={styles.punchline}>"....{punchline} "</Text>
      {/* <Button title={loading} onPress={getJoke}/> */}

      <View style={styles.line}></View>
      <TouchableOpacity style={styles.button}  onPress={getJoke}>
        <View>
          <Text style={styles.buttonText}>{loading}</Text>
        </View>
      </TouchableOpacity>
        </View>
        
         </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
  },
  linear: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  whiteSpace: {
    backgroundColor: 'white',
    padding: 25,
    borderRadius: 15,
    width:"85%",
  },
  joke: {
    fontWeight: '900',
    fontSize: 21,
  },
  punchline: {
    fontWeight: '600',
    fontSize: 17,
    fontStyle: 'italic',
    marginTop: 25,
  },
  button: {
    backgroundColor: '#970d1a',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: '45%',
    marginTop: 25,
    alignSelf: 'flex-end',
    borderRadius: 20,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontFamily: 'sans-serif',
    fontSize: 15,
  },
  line: {
    backgroundColor: '#cec8c8',
    height: 1,
    borderRadius: 100,
  }
});
