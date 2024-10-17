import React, { useEffect, useRef } from 'react';
import { StyleSheet, SafeAreaView, View, Text, Animated } from 'react-native';
import BGVideo from '../components/BGVideo';
import HeartModel from '../components/HeartModel';
import StartButton from '../components/StartButton';
import StatsButton from '../components/StatsButton';
import ConnectionButton from '../components/ConnectionButton';
import { Montserrat_400Regular } from '@expo-google-fonts/montserrat';
import { useFonts } from '@expo-google-fonts/montserrat';
import { CourierPrime_400Regular } from '@expo-google-fonts/courier-prime';

export default function HomeScreen() {
  // Загрузка шрифтов
  const [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    CourierPrime_400Regular
  });
    
  // Анимация текста KardiographX
  const text = 'KardiX';
  const animatedValues = useRef<Array<Animated.Value>>(text.split('')
                          .map(() => new Animated.Value(0))).current;
  const animateTyping = (index: number): Promise<void> => {
    return new Promise((resolve) => {
      Animated.timing(animatedValues[index], {
        toValue: 1,
        duration: 200,
        useNativeDriver: false,
        delay: index * 100,
      }).start(() => {
        resolve();
      });
    });
  };

  const animateDeleting = (index: number): Promise<void> => {
    return new Promise((resolve) => {
      Animated.timing(animatedValues[index], {
        toValue: 0,
        duration: 200,
        useNativeDriver: false,
        delay: 100,
      }).start(() => {
        resolve();
      });
    });
  };

  const startAnimation = async () => {
    while (true) {
      // Анимация печатания
      for (let i = 0; i < text.length; i++) {
        await animateTyping(i);
      }

      // Задержка перед удалением
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Анимация стирания
      for (let i = text.length - 1; i >= 0; i--) {
        await animateDeleting(i);
      }
    }
  };

  // Запуск анимации
  useEffect(() => {
    startAnimation();
  }, []);

  if (!fontsLoaded) {
    return <Text>Загрузка шрифтов...</Text>;
  }


  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.textContainer}>
        {text.split('').map((char, index) => {
          const opacity = animatedValues[index];
          return (
            <Animated.Text key={index} style={[styles.titleText, {opacity}]}>
              {char}
            </Animated.Text>
          );
        })}
      </View>

      <HeartModel />
      
      <StartButton />
      <StatsButton />
      <ConnectionButton />

      

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContainer: {
    flexDirection: 'row',
  },
  titleText: {
    textAlign: 'center',
    color: '#FAFAFA',
    fontSize: 36,
    fontFamily: 'CourierPrime_400Regular',
    top: '9%',
    shadowColor: "#000",
    shadowOffset: {
        width: 2,
        height: 2,
    },
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },
});

// Made by Nikita Prosvirkin