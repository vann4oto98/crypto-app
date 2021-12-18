import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { COLORS, SIZES, icons, FONTS } from "../../constants";

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
  },
});

export const PriceAlert = ({ customContainerStyle }) => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: "row",
        alignItems: "center",
        marginTop: SIZES.padding * 4.5,
        marginHorizontal: SIZES.padding,
        paddingVertical: SIZES.padding,
        paddingHorizontal: SIZES.padding,
        backgroundColor: COLORS.white,
        borderRadius: SIZES.radius,
        ...customContainerStyle,
        ...styles.shadow,
      }}
    >
      <Image
        source={icons.notification_color}
        style={{ width: 30, height: 30 }}
      />
      <View style={{ flex: 1, marginLeft: SIZES.radius }}>
        <Text style={{ ...FONTS.h3 }}>SetPrice Alert</Text>
        <Text style={{ ...FONTS.body4 }}>
          Get notified when your coins are moving
        </Text>
      </View>
      <Image
        source={icons.right_arrow}
        syle={{ width: 25, height: 25, tintColor: COLORS.gray }}
      />
    </TouchableOpacity>
  );
};
