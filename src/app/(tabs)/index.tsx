import { StyleSheet, ScrollView, View, ImageBackground } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from '@/constants/Colors';

export default function HomeScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }} edges={['left', 'right']}>
      <ThemedView style={styles.titleContainer}>
      <View style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: 300 }}>
        <ImageBackground source={require('@/assets/images/utah.png')} resizeMode="cover" style={styles.titleImage}>
        </ImageBackground>
      </View>
          <ThemedText type="title" style={styles.title}>NBA Madness!</ThemedText>
      </ThemedView>
      <ScrollView style={styles.scrollView}>
        <ThemedView style={styles.stepContainer}>
          <ThemedText type="subtitle">NBA Joukkueet</ThemedText>
          <ThemedText>
            Katso joukkueet ja niiden line-up!
          </ThemedText>
        </ThemedView>
        <ThemedView style={styles.stepContainer}>
          <ThemedText type="subtitle">Peliohjelma</ThemedText>
          <ThemedText>
            Kauden peliohjelma visuaalisesti kauniisti esitettynä.
          </ThemedText>
        </ThemedView>
        <ThemedView style={styles.stepContainer}>
          <ThemedText type="subtitle">Otteluiden tulokset</ThemedText>
          <ThemedText>
            Tulokset reaaliaikaisesti tilastoineen.
          </ThemedText>
        </ThemedView>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    paddingBottom: 24,
    gap: 8,
    minHeight: 300,
    justifyContent: 'center',
  },
  title: {
    color: Colors.dark.tint,
    textShadowColor: Colors.dark.background,
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 2,
  },
  scrollView: {
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 16,
  },
  titleImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    // bottom: 0,
    // left: 0,
    // position: 'absolute',
    // height: 200,
    opacity: 0.6,
  },
});
