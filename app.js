import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import React from 'react';

const app = () => {
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
        <View>
          <Text style={styles.Text}>BookingDetails</Text>
        </View>
        <View style={styles.ContainerBox}>
          <View>
            <Text style={styles.TextLeft}>ID</Text>
            <Text style={styles.TextLeft}>Date</Text>
            <Text style={styles.TextLeft}>Time</Text>
            <Text style={styles.TextLeft}>Duration</Text>
            <Text style={styles.TextLeft}>States</Text>
          </View>
          <View>
            <Text style={styles.TextRight}>PD-0351512224</Text>
            <Text style={styles.TextRight}>Mon, 26 jul 2024</Text>
            <Text style={styles.TextRight}>09:00 AM</Text>
            <Text style={styles.TextRight}>30 Minutes</Text>
            <Text style={styles.TextRight}>
              <Text
                style={{
                  backgroundColor: 'lavender',
                  color: 'purple',
                }}>
                Upcoming
              </Text>
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.Container}>
        <View>
          <Text style={styles.Text}>Patient Information</Text>
        </View>
        <View style={styles.ContainerBox}>
          <View>
            <Text style={styles.TextLeft}>Name</Text>
            <Text style={styles.TextLeft}>Email</Text>
            <Text style={styles.TextLeft}>Phone</Text>
            <Text style={styles.TextLeft}>Address</Text>
            <Text style={styles.TextLeft}>DOB</Text>{' '}
            <Text style={styles.TextLeft}>Status</Text>
          </View>
          <View>
            <Text style={styles.TextRight}>Ansal Gurung</Text>
            <Text style={styles.TextRight}>ansalgurung124@gmail.com</Text>
            <Text style={styles.TextRight}>+977 980 4567891</Text>
            <Text style={styles.TextRight}>Kathmandu, Nepal</Text>
            <Text style={styles.TextRight}>1995-08-25</Text>{' '}
            <Text style={styles.TextRight}>Male</Text>
          </View>
        </View>
      </View>

      <View style={styles.Container}>
        <View>
          <Text style={styles.Text}>Problem Details</Text>
        </View>
        <View style={styles.ContainerBox}>
          <View>
            <Text style={styles.TextLeft}>Concern</Text>
            <Text style={styles.TextLeft}>Symptoms</Text>
          </View>
          <View>
            <Text style={styles.TextRight}>Back Pain</Text>
            <Text style={[styles.TextRight, {flexShrink: 1, maxWidth: '92%'}]}>
              Pain in middle area stomach. Already comsume painkiller for past
              two days and there is no progress.
            </Text>
          </View>
        </View>
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
    // flexShrink: 1, // Allow text to shrink and wrap
    // maxWidth: '92%', // Ensure it doesn’t exceed a limit
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
