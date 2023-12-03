import React from "react";
import {
  Text,
  View,
  SafeAreaView,
  StatusBar,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Image } from "react-native";
import { theme } from "../theme";
// import { MagnifyingGlassIcon } from "react-native-heroicons";

const HomeScreen = () => {
  return (
    <View className="flex-1 relative">
      <StatusBar style="light" />
      <Image
        blurRadius={5}
        source={require("../assets/background.jpg")}
        className="absolute h-full w-full"
      />
      <SafeAreaView className="flex flex-1">
        <View className="h-[7%] mx-4 relative z-50">
          <View
            className="flex-row justify-end items-center rounded-full"
            style={{ backgroundColor: theme.bgWhite(0.2) }}
          >
            <TextInput
              placeholder="Search city"
              placeholderTextColor={"lightgray"}
              className="pl-6 h-10 flex-1 text-base text-white"
            />
            <TouchableOpacity
              className="p-3 m-1 rounded-full"
              style={{ backgroundColor: theme.bgWhite(0.3) }}
            >
              <Text>Icon</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default HomeScreen;
