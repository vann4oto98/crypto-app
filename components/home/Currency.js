import React from "react";
import { Image, View, Text } from "react-native";
import { SIZES, FONTS, COLORS } from "../../constants";

export const Currency = ({ item }) => {
  return (
    <View style={{ flexDirection: "row" }}>
      <View>
        <Image
          source={item.image}
          resizeMode="cover"
          style={{ marginTop: 5, width: 25, height: 25 }}
        />
      </View>
      <View style={{ marginLeft: SIZES.base }}>
        <Text style={{ ...FONTS.h2 }}>{item.currency}</Text>
        <Text style={{ color: COLORS.gray, ...FONTS.body3 }}>{item.code}</Text>
      </View>
    </View>
  );
};
