import React from 'react';
import { useFonts } from 'expo-font';
import Routes from './src/routes';

// /* import { Nunito_600SemiBold, Nunito_700Bold, Nunito_800ExtraBold } from '@expo-google-fonts/nunito';
//  */

// /*   const [fontsLoaded] = useFonts({
//     Nunito_600SemiBold,
//     nuni700: Nunito_700Bold,
//     Nunito_800ExtraBold,
//   }); */

// /*   if (!fontsLoaded) {
//     return null;
//   }
//  */

export default function App() {
  return (
    <Routes />
  );
}