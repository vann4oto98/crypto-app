import React from "react";
import { View, Text } from "react-native";
import { COLORS, dummyData, FONTS, SIZES } from "../../constants";

export const Balance = () => {
  return (
    <View style={{ alignItems: "center", justifyContent: "center" }}>
      <Text style={{ color: COLORS.white, ...FONTS.h3 }}>
        Your Portfolio Balance
      </Text>
      <Text style={{ marginTop: SIZES.base, color: COLORS.white, ...FONTS.h1 }}>
        ${dummyData.portfolio.balance}
      </Text>
      <Text style={{ color: COLORS.white, ...FONTS.body5 }}>
        {dummyData.portfolio.changes} Last 24 hours
      </Text>
    </View>
  );
};
