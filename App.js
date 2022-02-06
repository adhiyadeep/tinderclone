import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Tabs from './src/navigation/Tab';
import HomeScreen from './src/screens/HomeScreen';

function App() {
  return (
    <NavigationContainer>
        <Tabs />
    </NavigationContainer>
  )

}

export default App;
