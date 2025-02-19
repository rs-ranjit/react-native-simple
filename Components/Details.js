import React from 'react';
import {View, Text} from 'react-native';
import styles from '../styles/styles'; //

const Details = ({title, data}) => (
  <View style={styles.container}>
    <Text style={styles.textTitle}>{title}</Text>
    <View style={styles.containerBox}>
      <View>
        {Object.keys(data).map(label => (
          <Text key={label} style={styles.textLeft}>
            {label}
          </Text>
        ))}
      </View>
      <View>
        {Object.entries(data).map(([_, [value, extraStyle]]) => (
          <Text key={value} style={[styles.textRight, extraStyle]}>
            {value}
          </Text>
        ))}
      </View>
    </View>
  </View>
);

export default Details;
