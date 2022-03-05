import React from 'react';
import { Button, View } from 'react-native';

function Login({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        title='Go to register'
        onPress={() => navigation.navigate('Register')}
      />
    </View>
  );
}

export default Login;
