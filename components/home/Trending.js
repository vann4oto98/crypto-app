import React, { useState } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { COLORS, dummyData, FONTS, SIZES } from "../../constants";
import { useTrending } from "./useTrending";

export const Trending = () => {
  const { trending, setTrending, renderItem } = useTrending();
  return (
    <View style={{ position: "absolute", bottom: "-30%" }}>
      <Text
        style={{ marginLeft: SIZES.padding, color: COLORS.white, ...FONTS.h2 }}
      >
        Trending
      </Text>
      <FlatList
        contentContainerStyle={{ marginTop: SIZES.base }}
        data={trending}
        renderItem={renderItem}
        keyExtractor={(item) => `${item.id}`}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};
