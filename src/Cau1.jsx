import { StatusBar } from "expo-status-bar";
import React, { useEffect, useRef } from "react";

import { Animated, Button, StyleSheet, Text, View } from "react-native";

export default function Cau_1() {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 10000,
    }).start();
  }, [fadeAnim]);

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.fadingContainer,
          {
            opacity: fadeAnim,
          },
        ]}
      >
        <Text style={styles.fadingText}>
          Wellcome to Animations React Native
        </Text>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  fadingContainer: {
    width: "100%",
    padding: 20,
    backgroundColor: "powderblue",
  },
  fadingText: {
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
    width: "100%",
    fontSize: 14,
  },
  buttonRow: {
    flexBasis: 100,
    justifyContent: "space-evenly",
    marginVertical: 16,
  },
});
