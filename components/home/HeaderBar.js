import { Image, TouchableOpacity, View } from "react-native";
import { icons, SIZES } from "../../constants";
import React from "react";

export const HeaderBar = () => {
  return (
    <View
      style={{
        marginTop: SIZES.padding * 2,
        width: "100%",
        alignItems: "flex-end",
        paddingHorizontal: SIZES.padding,
      }}
    >
      <TouchableOpacity
        style={{
          width: 35,
          height: 35,
          alignItems: "center",
          justifyContent: "center",
        }}
        onPress={() => console.log("Notification on pressed")}
      >
        <Image
          source={icons.notification_white}
          resizeMode={"contain"}
          style={{ flex: 1 }}
        />
      </TouchableOpacity>
    </View>
  );
};
