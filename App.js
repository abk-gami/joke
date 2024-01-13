import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import React, {useState} from 'react';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  const [joke, setJoke] = useState('')
  const [punchline, setPunchline] = useState('')
  const [loading, setLoading] = useState('Get Joke')
  const [color, setColor] = useState('#970d1a')
  const [width, setWidth] = useState('45%')
   
  const getJoke = async () => {
    try {
      setColor('#4e204d')
      setWidth('60%')
      setLoading('Generating Joke...')
      let response = await fetch('https://official-joke-api.appspot.com/random_joke');
      let data = await response.json();
      // console.log(data)
      setJoke( data.setup ); 
      setPunchline(data.punchline);
      setLoading(loading);
      setColor(color);
      setWidth(width)
  } catch (error) {
    alert('There is an error:' + error);
    // console.error(error)
  }
}
return (
    <View 
    style={styles.container}
    >  
      <StatusBar style='light-content'/>
       <LinearGradient
        // Background Linear Gradient
        colors={['#970d1a', '#4e204d']}
        style={styles.linear} 
      >
        <View style={styles.whiteSpace}>  

          <Text style={styles.heading}>HIGH IQ HUMOR</Text>
      <View style={styles.line}></View>
      <Text style={styles.joke}>{joke}</Text>
      <Text style={styles.punchline}>"....{punchline} "</Text>
      {/* <Button title={loading} onPress={getJoke}/> */}

      <View style={styles.line}></View>
      <TouchableOpacity 
      style={[styles.button,{ backgroundColor: color, width: width}]}  
      onPress={getJoke} 
      >
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
    // backgroundColor: '#f4f455',
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
    fontWeight: '700',
    fontSize: 21,
    marginTop: 15
  },
  punchline: {
    fontWeight: '600',
    fontSize: 17,
    fontStyle: 'italic',
    marginTop: 25,
    marginBottom: 10,
  },
  button: {
    // backgroundColor: '#970d1a',
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
    backgroundColor: '#4e204d',
    height: 1,
    borderRadius: 100,
    opacity: 0.2,
  },
  heading: {
    fontWeight: 'bold',
    fontSize: 25,
    marginBottom: 15,
    alignSelf: 'center'
  }
});
