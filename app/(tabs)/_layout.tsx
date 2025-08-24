import EvilIcons from "@expo/vector-icons/EvilIcons";
import Ionicons from "@expo/vector-icons/Ionicons";
import AntDesign from "@expo/vector-icons/AntDesign";

import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#1a237e",
      }}
    >
      <Tabs.Screen
        name="user/[id]"
        options={{
          title: "Mahasiswa Detail",
          href: null,
        }}
      />

      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={30} color="black" />
          ),
        }}
      />
      <Tabs.Screen
        name="mahasiswa"
        options={{
          title: "Mahasiswa",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="people-circle" size={24} color="black" />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color, size }) => (
           <AntDesign name="user" size={30} color="black" />
          ),
        }}
      />
    </Tabs>
  );
}