import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import colors = require("tailwindcss/colors");

type props = {
  title: string;
  itemQuantity?: number;
};

export function Header({ title, itemQuantity = 0 }: props) {
  return (
    <View className="flex-row items-center border-b border-slate-700 pb-5 mx-5">
      <View className="flex-1">
        <Text className="text-white text-xl font-heading">Menu</Text>
      </View>
      {itemQuantity > 0 && (
        <TouchableOpacity className="relative">
          <View className="bg-lime-300 w-4 h-4 rounded-full items-center justify-center top-2 z-10 -right-3.5">
            <Text className="text-slate-900 font-bold text-xs ">
              {itemQuantity}
            </Text>
          </View>
          <Feather name="shopping-bag" color={colors.white} size={24} />
        </TouchableOpacity>
      )}
    </View>
  );
}
