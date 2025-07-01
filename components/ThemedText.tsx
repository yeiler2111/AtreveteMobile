import React from 'react';
import { StyleSheet, Text, TextProps } from 'react-native';

interface ThemedTextProps extends TextProps {
  type?: 'title' | 'link' | 'default';
  children: React.ReactNode;
}

export const ThemedText = ({ type = 'default', style, children, ...props }: ThemedTextProps) => {
  let textStyle = styles.default;
  if (type === 'title') textStyle = styles.title;
  if (type === 'link') textStyle = styles.link;
  return (
    <Text style={[textStyle, style]} {...props}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  default: {
    color: '#222',
    fontSize: 16,
  },
  title: {
    color: '#d32f2f',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 12,
    textAlign: 'center',
  },
  link: {
    color: '#1976d2',
    fontSize: 18,
    textDecorationLine: 'underline',
    textAlign: 'center',
  },
});
