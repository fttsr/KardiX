import React from "react";
import { StyleSheet, View } from 'react-native';
import Video from 'react-native-video';

export default function BGVideo() {
    
  return (
    <View style={{ flex: 1 }}>  
      <Video
        source={require('../../assets/videos/cardio.mp4')}
        style={styles.video}
        resizeMode="cover"
        repeat
        muted
      />
    </View>
  );
}

const styles = StyleSheet.create({
    video: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    },
  });
  