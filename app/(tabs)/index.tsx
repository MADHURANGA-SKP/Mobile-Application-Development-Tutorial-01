import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

export default function HomeScreen() {
  // State for Student Registration
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState('');
  const [isRegistered, setIsRegistered] = useState(false);

  // State for Marks Entry and Average Calculation
  const [num1, setNum1] = useState<string>('');
  const [num2, setNum2] = useState<string>('');
  const [num3, setNum3] = useState<string>('');
  const [average, setAverage] = useState<string | null>(null);;

  // Function to handle registration
  const handleRegisterCalculateAverage = () => {
    if (!firstName || !lastName || !email || !password) {
      alert('Please fill all the registration fields!');
      return;
    }
    setIsRegistered(true);
    alert('Student registered successfully!');

    if (!num1 || !num2 || !num3 || isNaN(parseFloat(num1)) || isNaN(parseFloat(num2)) || isNaN(parseFloat(num3))) {
      alert('Please enter valid marks for all subjects!');
      return;
    }
    const avg = (parseFloat(num1) + parseFloat(num2) + parseFloat(num3)) / 3;
    setAverage(avg.toFixed(2));
  };


  return (
    <View style={styles.container}>
        <View>
          <Text style={styles.heading}>Student Registration</Text>
          <TextInput
            style={styles.input}
            placeholder="First Name"
            onChangeText={setFirstName}
            value={firstName}
          />
          <TextInput
            style={styles.input}
            placeholder="Last Name"
            onChangeText={setLastName}
            value={lastName}
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            keyboardType="email-address"
            onChangeText={setEmail}
            value={email}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry={true}
            onChangeText={setPassword}
            value={password}
          />

          <Text style={styles.heading}>Enter Marks</Text>
          <TextInput
            style={styles.input}
            placeholder="Subject 1 Marks"
            keyboardType="numeric"
            onChangeText={setNum1}
            value={num1}
          />
          <TextInput
            style={styles.input}
            placeholder="Subject 2 Marks"
            keyboardType="numeric"
            onChangeText={setNum2}
            value={num2}
          />
          <TextInput
            style={styles.input}
            placeholder="Subject 3 Marks"
            keyboardType="numeric"
            onChangeText={setNum3}
            value={num3}
          />
          <Button title="Register & Calculate Average" onPress={handleRegisterCalculateAverage} />
          {average !== null && (
            <Text style={styles.result}>Average Marks: {average}</Text>
          )}
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    width: '100%',
    paddingHorizontal: 10,
    marginBottom: 10,
    backgroundColor: '#fff',
  },
  result: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
