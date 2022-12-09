import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, ImageBackground, Image } from 'react-native';
import {Header} from './components/Header';
const image = { uri: "https://static.vecteezy.com/system/resources/thumbnails/011/913/922/small/abstract-pink-watercolor-background-pastel-soft-water-color-pattern-vector.jpg" };

export default function App() {
  return (
      <ImageBackground
      source={image} resizeMode="cover" style={styles.container}
      >
        <ScrollView>
            <Header />
             <StatusBar style="auto" />
        </ScrollView>
      </ImageBackground>
    
     

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   paddingTop: 80,
   paddingBottom: 100,
   backgroundGradient: "vertical",
   backgroundGradientTop: "#333333",
   backgroundGradientBottom: "#666666",

  },
});
