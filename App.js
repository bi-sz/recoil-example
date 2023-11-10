import { View } from 'react-native';
import { Provider } from 'react-redux';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Header } from './src/components/Header/Header';
import { HookTestComponet } from './src/components/HookTestComponent';
import { useCallback, useState } from 'react';
import { Typography } from './src/components/Typography';
import { Button } from './src/components/Button';
import { CounterScreen } from './src/screens/CounterScreen';
import store from './src/store/store';

export default function App() {

  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <CounterScreen/>
      </Provider>
    </SafeAreaProvider>
  );
}
