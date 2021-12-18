import React from "react";
import { ImageBackground, StyleSheet, View } from "react-native";
import { images } from "../../constants";
import { HeaderBar } from "./HeaderBar";
import { Balance } from "./Balance";
import { Trending } from "./Trending";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
});

export const Header = () => {
  return (
    <View style={{ width: "100%", height: 290, ...styles.shadow }}>
      <ImageBackground
        source={images.banner}
        resizeMode={"cover"}
        style={{ flex: 1, alignItems: "center" }}
      >
        <HeaderBar />
        <Balance />
        <Trending />
      </ImageBackground>
    </View>
  );
};
