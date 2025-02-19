import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  StatusBar,
  FlatList,
} from 'react-native';
import React from 'react';

const app = () => {
  const bookingDetails = [
    {label: 'ID', value: 'PD-0351512224'},
    {label: 'Date', value: 'Mon, 26 jul 2024'},
    {label: 'Time', value: '09:00 AM'},
    {label: 'Duration', value: '30 Minutes'},
    {label: 'Status', value: 'Upcoming'},
  ];

  const patientInfo = [
    {label: 'Name', value: 'Ansal Gurung'},
    {label: 'Email', value: 'ansalgurung124@gmail.com'},
    {label: 'Phone', value: '+977 980 4567891'},
    {label: 'Address', value: 'Kathmandu, Nepal'},
    {label: 'DOB', value: '1995-08-25'},
    {label: 'Status', value: 'Male'},
  ];

  const problemDetails = [
    {label: 'Concern', value: 'Back Pain'},
    {
      label: 'Symptoms',
      value:
        'Pain in middle area stomach. Already consumed painkiller for past two days and there is no progress.',
    },
  ];

  const renderItem = ({item}) => (
    <View style={styles.ContainerBox}>
      <View>
        <Text style={styles.TextLeft}>{item.label}</Text>
      </View>
      <View>
        <Text style={styles.TextRight}>{item.value}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.main}>
      <StatusBar barStyle="dark-content" backgroundColor="white" />

      <View style={styles.topContainer}>
        <Image
          source={require('./assets/arrow.png')}
          accessibilityLabel="helo"
          style={styles.image}
          resizeMode="contain"
        />
        <Text style={[styles.topText, styles.text]}>Schedule Details</Text>
      </View>

      <View style={styles.Container}>
        <Text style={styles.Text}>Booking Details</Text>
        <FlatList
          data={bookingDetails}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>

      <View style={styles.Container}>
        <Text style={styles.Text}>Patient Information</Text>
        <FlatList
          data={patientInfo}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>

      <View style={styles.Container}>
        <Text style={styles.Text}>Problem Details</Text>
        <FlatList
          data={problemDetails}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>

      <View style={styles.lastContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={{color: 'orange'}}>Reject</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={{color: 'purple'}}>Reschedule</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, {backgroundColor: 'purple'}]}>
          <Text style={{color: 'white'}}>Check In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default app;

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#f5f5f5',
    flex: 1,
  },
  topContainer: {
    backgroundColor: 'white',
    width: '100%',
    height: 70,
    flexDirection: 'row',
    paddingTop: 20,
  },
  image: {
    width: 50,
    height: 20,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  topText: {
    paddingLeft: 100,
  },
  Container: {
    backgroundColor: 'white',
    margin: 13,
    padding: 13,
  },
  ContainerBox: {
    flexDirection: 'row',
  },
  TextRight: {
    paddingLeft: 20,
    fontSize: 14,
    paddingBottom: 7,
  },
  TextLeft: {
    paddingLeft: 10,
    paddingBottom: 7,
    color: 'grey',
    fontSize: 14,
  },
  Text: {
    fontWeight: 'bold',
    fontSize: 14,
    marginBottom: 16,
    paddingLeft: 10,
  },
  button: {
    borderWidth: 1,
    width: 120,
    justifyContent: 'center',
    height: 50,
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 5,
    borderColor: '#f5f5f5',
    elevation: 1,
    marginBottom: 30,
    marginTop: 30,
  },
  lastContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});
