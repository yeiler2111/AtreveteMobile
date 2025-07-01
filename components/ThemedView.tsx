import React from 'react';
import { StyleSheet, View, ViewProps } from 'react-native';

interface ThemedViewProps extends ViewProps {
  children: React.ReactNode;
}

export const ThemedView = ({ style, children, ...props }: ThemedViewProps) => {
  return (
    <View style={[styles.container, style]} {...props}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
