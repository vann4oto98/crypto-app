import React from "react";
import { View, Text } from "react-native";
import { COLORS, FONTS, SIZES } from "../../constants";

export const Value = ({ item }) => {
  return (
    <View style={{ marginTop: SIZES.radius }}>
      <Text style={{ ...FONTS.h2 }}>${item.amount}</Text>
      <Text style={{ color: item.type === "I" ? COLORS.green : COLORS.red }}>
        {item.changes}
      </Text>
    </View>
  );
};
