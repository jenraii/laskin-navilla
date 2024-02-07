import React, { useRef, useState } from 'react';
import { FlatList, StyleSheet, View, Text, Button, TextInput, Alert } from 'react-native';

function Calculator({ navigation }) {
  const [numberA, setNumberA] = useState('');
  const [numberB, setNumberB] = useState('');
  const [result, setResult] = useState('');
  const [data, setData] = useState([]);

  const initialFocus = useRef(null);

  const plus = () => {
    if (isNaN(parseFloat(numberA)) || isNaN(parseFloat(numberB))) {
      Alert.alert('Warning', "Type a number first");
    }
    else {
    const numA = parseInt(numberA);
    const numB = parseInt(numberB);
    const result = numA + numB;
    setResult(result);
    setNumberA('');
    setNumberB('');
    initialFocus.current.focus();
    setData([...data, { key: `${numA} + ${numB} = ${result}` }]);
  }
};

  const minus = () => {
    if (isNaN(parseFloat(numberA)) || isNaN(parseFloat(numberB))) {
      Alert.alert('Warning', "Type a number first");
    }
    else {
    const numA = parseInt(numberA);
    const numB = parseInt(numberB);
    const result = numA - numB;
    setResult(result);
    setNumberA('');
    setNumberB('');
    initialFocus.current.focus();
    setData([...data, { key: `${numA} - ${numB} = ${result}` }]);
  }
};

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 20 }}>Result: {result}</Text>
      <TextInput
        style={styles.input}
        ref={initialFocus}
        onChangeText={(numberA) => setNumberA(numberA)}
        value={numberA}
        keyboardType="number-pad"
      />
      <TextInput
        style={styles.input}
        onChangeText={(numberB) => setNumberB(numberB)}
        value={numberB}
        keyboardType="number-pad"
      />
      <View style={styles.button}>
        <View style={styles.buttonMore}>
          <Button onPress={plus} title="+" />
        </View>
        <View style={styles.buttonMore}>
          <Button onPress={minus} title="-" />
        </View>
        <View style={styles.history}>
          <Button
            onPress={() => navigation.navigate('History', { data })}
            title="History" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'afff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: '50%',
    borderColor: 'gray',
    borderWidth: 1,
    padding: 5,
    margin: 5,
  },
  button: {
    width: '35%',
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  buttonMore: {
    width: '30%',
    padding: 5,
    margin: 5,
  },
  history: {
    padding: 5,
    padding: 5,
    margin: 5,
  }
});

export default Calculator;