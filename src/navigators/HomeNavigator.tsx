import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { TopBar } from "../components/top-bar/top-bar-feature";
import { HomeScreen } from "../screens/HomeScreen";
import MaterialCommunityIcon from "@expo/vector-icons/MaterialCommunityIcons";
import DiscoverScreen from "../screens/DiscoverScreen";
import ActivityScreen from "../screens/ActivityScreen";
import ProfileScreen from "../screens/ProfileScreen";
import { BrandColors } from "../theme/brand";

const Tab = createBottomTabNavigator();

export function HomeNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: route.name !== "Home",
        header: route.name !== "Home" ? () => <TopBar /> : undefined,
        tabBarStyle: {
          backgroundColor: BrandColors.tabBar,
          borderTopColor: BrandColors.border,
          borderTopWidth: 1,
          height: 60,
          paddingBottom: 8,
          paddingTop: 4,
        },
        tabBarActiveTintColor: BrandColors.purpleLight,
        tabBarInactiveTintColor: BrandColors.textMuted,
        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: "600",
        },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: keyof typeof MaterialCommunityIcon.glyphMap;
          switch (route.name) {
            case "Home":
              iconName = focused ? "home" : "home-outline";
              break;
            case "Discover":
              iconName = focused ? "compass" : "compass-outline";
              break;
            case "Activity":
              iconName = focused ? "lightning-bolt" : "lightning-bolt-outline";
              break;
            case "Profile":
              iconName = focused ? "account-circle" : "account-circle-outline";
              break;
            default:
              iconName = "circle";
          }
          return (
            <MaterialCommunityIcon name={iconName} size={size} color={color} />
          );
        },
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen name="Discover" component={DiscoverScreen} />
      <Tab.Screen name="Activity" component={ActivityScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
