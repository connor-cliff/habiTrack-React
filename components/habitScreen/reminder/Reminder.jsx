import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';

import styles from './reminder.style'

const Reminder = () => {
  const [reminderTime, setReminderTime] = useState('');

  const handleTimeChange = (text) => {
    setReminderTime(text);
  };

  const handleSetReminder = () => {
    console.log('Set reminder for:', reminderTime);
    // Clear the text input
    setReminderTime('');
  };

  return (
    <View style={styles.inputContainer}>
      <View style={styles.inputWrapper}>
        <TextInput
            style={styles.userInput}
            placeholder="HH:MM"
            value={reminderTime}
            onChangeText={handleTimeChange}
          />
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.buttonWrapper}>
          <TouchableOpacity>
          <Text style={styles.buttonText}>Set reminder</Text>
        </TouchableOpacity>
       </View>
    </View>
    </View>
  );
};

export default Reminder;
