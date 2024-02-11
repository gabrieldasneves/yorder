import { Slot } from "expo-router";
import { SafeAreaView } from "react-native";
import {
  useFonts,
  Inter_400Regular,
  Inter_700Bold,
  Inter_800ExtraBold,
  Inter_600SemiBold,
  Inter_500Medium,
} from "@expo-google-fonts/inter";
import { Loading } from "../components/loading";

export default function layout() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold,
    Inter_800ExtraBold,
    Inter_600SemiBold,
    Inter_500Medium,
  });

  if (!fontsLoaded) {
    return <Loading />;
  }
  return (
    <SafeAreaView className="flex-1 bg-slate-900">
      <Slot />
    </SafeAreaView>
  );
}
