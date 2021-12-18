import React, { useState } from "react";
import { COLORS, dummyData, SIZES } from "../../constants";
import { TouchableOpacity } from "react-native";
import { Currency } from "./Currency";
import { Value } from "./Value";

export const useTrending = () => {
  const [trending, setTrending] = useState(dummyData.trendingCurrencies);
  const renderItem = ({ item, index }) => {
    return (
      <TouchableOpacity
        style={{
          width: 180,
          paddingVertical: SIZES.padding,
          paddingHorizontal: SIZES.padding,
          marginLeft: index === 0 ? SIZES.padding : 0,
          marginRight: SIZES.radius,
          borderRadius: 10,
          backgroundColor: COLORS.white,
          //todo: shadow ?
        }}
      >
        <Currency item={item} />
        <Value item={item} />
      </TouchableOpacity>
    );
  };

  return { trending, setTrending, renderItem };
};
