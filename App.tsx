import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet } from 'react-native';
import {Header} from './components/Header';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <Header />
      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
   paddingTop: 80,
   paddingBottom: 100,
  },
});
