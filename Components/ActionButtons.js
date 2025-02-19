import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import styles from '../styles/styles'; //

const ActionButtons = () => {
  return (
    <View style={styles.lastContainer}>
      {['Reject', 'Reschedule', 'Check In'].map(text => (
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
  );
};

export default ActionButtons;
