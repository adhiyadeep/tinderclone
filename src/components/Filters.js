import React from 'react';
import styles from '../assets/styles';

import { Text, TouchableOpacity } from 'react-native';
import Icon from './Icon';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Filters = () => {
  return (
    <TouchableOpacity style={styles.filters}>
      <Text style={styles.filtersText}>
        <AntDesign name="filter" size={18}/> Filters
      </Text>
    </TouchableOpacity>
  );
};

export default Filters;
