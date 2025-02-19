import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import React from 'react';

const DetailSection = ({title, data}) => (
  <View style={styles.container}>
    <Text style={styles.textTitle}>{title}</Text>
    <View style={styles.containerBox}>
      <View>
        {data.map(([label]) => (
          <Text key={label} style={styles.textLeft}>
            {label}
          </Text>
        ))}
      </View>
      <View>
        {data.map(([_, value, extraStyle]) => (
          <Text key={value} style={[styles.textRight, extraStyle]}>
            {value}
          </Text>
        ))}
      </View>
    </View>
  </View>
);

const app = () => {
  return (
    <View style={styles.main}>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      {/* Top Header */}
      <View style={styles.topContainer}>
        <Image
          source={require('./assets/arrow.png')}
          style={styles.image}
          resizeMode="contain"
        />
        <Text style={styles.topText}>Schedule Details</Text>
      </View>

      <DetailSection
        title="Booking Details"
        data={[
          ['ID', 'PD-0351512224'],
          ['Date', 'Mon, 26 Jul 2024'],
          ['Time', '09:00 AM'],
          ['Duration', '30 Minutes'],
          [
            'Status',
            'Upcoming',
            {backgroundColor: 'lavender', color: 'purple'},
          ],
        ]}
      />

      <DetailSection
        title="Patient Information"
        data={[
          ['Name', 'Ansal Gurung'],
          ['Email', 'ansalgurung124@gmail.com'],
          ['Phone', '+977 980 4567891'],
          ['Address', 'Kathmandu, Nepal'],
          ['DOB', '1995-08-25'],
          ['Status', 'Male'],
        ]}
      />

      <DetailSection
        title="Problem Details"
        data={[
          ['Concern', 'Back Pain'],
          [
            'Symptoms',
            'Pain in middle area stomach. Already consumed painkillers for past two days and there is no progress.',
            {flexShrink: 1, maxWidth: '92%'},
          ],
        ]}
      />

      <View style={styles.lastContainer}>
        {['Reject', 'Reschedule', 'Check In'].map((text, index) => (
          <TouchableOpacity
            key={text}
            style={[
              styles.button,
              text === 'Check In' && {backgroundColor: 'purple'},
            ]}>
            <Text
              style={{
                color:
                  text === 'Check In'
                    ? 'white'
                    : text === 'Reject'
                    ? 'orange'
                    : 'purple',
              }}>
              {text}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default app;

const styles = StyleSheet.create({
  main: {backgroundColor: '#f5f5f5', flex: 1},
  topContainer: {
    backgroundColor: 'white',
    height: 70,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  image: {width: 50, height: 20},
  topText: {fontWeight: 'bold', fontSize: 16, paddingLeft: 100},
  container: {backgroundColor: 'white', margin: 13, padding: 13},
  containerBox: {flexDirection: 'row'},
  textRight: {paddingLeft: 20, fontSize: 14, paddingBottom: 7},
  textLeft: {paddingLeft: 10, paddingBottom: 7, color: 'grey', fontSize: 14},
  textTitle: {
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
