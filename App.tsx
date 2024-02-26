import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput,TouchableOpacity} from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function App() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [localization, setLocalization] = useState('');

  const handleNameChange = (text: string) => {
    setName(text);
  };

  const handleAgeChange = (text: string) => {
    setAge(text);
  };
  const handleRetakeImagePress = () => {
    console.log('Retake image button pressed');
    // You can add your logic here
  };

  const handleSendPress = () => {
    console.log('Send button pressed');
    // You can add your logic here
  };

  
  const handleButtonPress = () => {
    console.log('Name:', name);
    console.log('Age:', age);
    console.log('Localization:',localization);
    // You can add your logic here
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Personal Info</Text>
      <TextInput
        style={styles.input}
        placeholder="Sex"
        onChangeText={handleNameChange}
        value={name}
      />
      <TextInput
        style={styles.input}
        placeholder="Age"
        onChangeText={handleAgeChange}
        value={age}
        keyboardType="numeric" // Set the keyboard type to numeric
      />
      <View style={styles.input}>
        <Text>Localization</Text>
        <Picker
          selectedValue={localization}
          onValueChange={(itemValue: typeof localization) => setLocalization(itemValue)}
        >
          <Picker.Item style={styles.pick} label="Pick an option" value="" />
          <Picker.Item style={styles.pick} label="Option 1" value="option1" />
          <Picker.Item style={styles.pick} label="Option 2" value="option2" />
          {/* Add more options as needed */}
        </Picker>
      </View>
      <TouchableOpacity style={styles.button} onPress={handleRetakeImagePress}>
        <Text style={styles.buttonText}>Re-take image</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button1} onPress={handleSendPress}>
        <Text style={styles.buttonText}>Send</Text>
      </TouchableOpacity>
      <Text style={styles.pc}>
      *Personal information helps our model give more accurate prediction. Your personal information is NOT being stored
      </Text>
      <StatusBar style="auto" />
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop:350,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    marginTop:10,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    width: '80%',
    borderRadius:5,
  },
  pc:{
    marginTop:8,
    fontSize:15,
    color:"#8B00FF",
    marginLeft:20,

  },
  view:{
    marginTop:10,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    width: '80%',
    borderRadius:5,
  },
  label: {
    color:"#8B00FF",
    fontSize: 18, // Adjust the font size as needed
    fontWeight: 'bold', // Add other text styles as needed
    marginBottom: 10,
    marginLeft:40,
  },
  picker: {
    width: 80,
    height: 50,
  },
  pick:{
    flexDirection:'row',
    marginBottom:50,
  },
  text:{
    color:"#8B00FF",
  },
  button: {
    marginTop:10,
    backgroundColor: '#8B00FF',
    padding: 20,
    borderRadius: 25,
    width: '50%',
    alignItems: 'center',
  },
  button1:{
    marginTop:10,
    backgroundColor: '#8B00FF',
    padding: 20,
    borderRadius: 25,
    width: '80%',
    alignItems: 'center',

  },
  buttonText:{
    color:"white",

  },
});
