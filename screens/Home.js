import React from "react";
import { View, ScrollView } from "react-native";

import { PriceAlert } from "../components/common/PriceAlert";
import { Header } from "../components/home/Header";

const Home = ({ navigation }) => {
  return (
    <ScrollView>
      <View style={{ flex: 1, paddingBottom: 130 }}>
        <Header />
        <PriceAlert />
      </View>
    </ScrollView>
  );
};

export default Home;
