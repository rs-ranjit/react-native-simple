import React from 'react';
import {View, StatusBar, Image, Text} from 'react-native';
import styles from './styles/styles';
import BookingDetails from './Components/BookingDetails';
import PatientInfo from './Components/PatientInfo';
import ProblemDetails from './Components/ProblemDetails';
import ActionButtons from './Components/ActionButtons';

const App = () => {
  return (
    <View style={styles.main}>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <View style={styles.topContainer}>
        <Image
          source={require('./assets/arrow.png')}
          style={styles.image}
          resizeMode="contain"
        />
        <Text style={styles.topText}>Schedule Details</Text>
      </View>

      <BookingDetails />

      <PatientInfo />

      <ProblemDetails />

      <ActionButtons />
    </View>
  );
};

export default App;
