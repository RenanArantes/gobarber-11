import React from 'react';
import { View, Text, StatusBar } from 'react-native';

const App: React.FC = () => {
  return (
    <>
      <StatusBar translucent backgroundColor="transparent" />
      <View style={{ flex: 1, backgroundColor: '#312e38' }}>
        <Text>Ola ReactNative</Text>
      </View>
    </>
  );
};

export default App;
