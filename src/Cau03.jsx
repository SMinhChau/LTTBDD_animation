import {
  Animated,
  Dimensions,
  Easing,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  View,
  Button,
} from "react-native";

import React, { useEffect, useRef, useState } from "react";
export default function Cau03() {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const [isTop, setIsTop] = useState(true);
  const [isRun, setRun] = useState(false);

  const handlePressReset = () => {
    setRun(false);
    setIsTop(false);
    startAnimation(isTop ? 0 : 0);
  };

  const handlePress = () => {
    setRun(true);
  };

  const handlePressStop = () => {
    setRun(false);
  };

  const startAnimation = (toValue) => {
    Animated.timing(fadeAnim, {
      toValue,
      duration: 1000,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start(() => {
      setIsTop(!isTop);
    });
  };

  useEffect(() => {
    if (isRun) {
      startAnimation(isTop ? 1 : 0);
    }
  }, [isTop, isRun]);

  const translateY = fadeAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [0, Dimensions.get("window").height - 70],
    extrapolate: "clamp",
  });
  return (
    <View style={styles.container}>
      <Animated.Image
        source={require("./assets/favicon.png")}
        style={[{ transform: [{ translateY }] }]}
      ></Animated.Image>

      <View style={styles.buttonContainer}>
        <View style={styles.buttonRowView}>
          <Button style={styles.buttonRow} title="Run" onPress={handlePress} />
        </View>
        <View style={styles.buttonRowView}>
          <Button
            style={styles.buttonRow}
            title="Stop"
            onPress={handlePressStop}
          />
        </View>
        <View style={styles.buttonRowView}>
          <Button
            style={styles.buttonRow}
            title="Reset"
            onPress={handlePressReset}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bottonContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  buttonRowView: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonRow: {
    width: 200,
    height: 50,
  },
  square: {
    width: 70,
    height: 70,
  },
});
