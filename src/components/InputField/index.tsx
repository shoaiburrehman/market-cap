import React from 'react';
import { TextInput, StyleSheet, TextInputProps } from 'react-native';

interface InputFieldProps extends TextInputProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder: string;
}

const InputField = ({ value, onChangeText, placeholder, ...props }: InputFieldProps) => {
  return (
    <TextInput
      style={styles.input}
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      {...props}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    padding: 8,
    marginBottom: 10,
    backgroundColor: '#fff'
  }
});

export default InputField;
