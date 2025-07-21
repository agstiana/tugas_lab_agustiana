import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

// Mencegah SplashScreen hilang sebelum font termuat
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    // 5 FONT STATIS
    "lato-bold": require("../assets/fonts/Lato-Bold.ttf"),
    "OpenSans_Condensed-Bold": require("../assets/fonts/OpenSans_Condensed-Bold.ttf"),
    "poppins-bold": require("../assets/fonts/Poppins-Bold.ttf"),
    "spacemono-regular": require("../assets/fonts/SpaceMono-Regular.ttf"),
    "Roboto_Condensed-Bold": require("../assets/fonts/Roboto_Condensed-Bold.ttf"),

    // 5 FONT VARIABLE
    "ibmplex-variable": require("../assets/fonts/IBMPlexSans-Italic-VariableFont_wdth,wght.ttf"),
    "inter-variable": require("../assets/fonts/Inter-VariableFont_opsz,wght.ttf"),
    "montserrat-variable": require("../assets/fonts/Montserrat-Italic-VariableFont_wght.ttf"),
    "raleway-variable": require("../assets/fonts/Raleway-Italic-VariableFont_wght.ttf"),
    "sora-variable": require("../assets/fonts/Sora-VariableFont_wght.ttf"),

    // Tambahan agar Frasydi mendeteksi Rubik
    "Rubik-Italic-VariableFont_wght": require("../assets/fonts/Rubik-Italic-VariableFont_wght.ttf"),
  });

  useEffect(() => {
    if (loaded && !error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null; // putih saat font belum termuat
  }

  return <Stack />;
}
