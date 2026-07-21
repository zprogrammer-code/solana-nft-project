import React from "react";
import { View, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Text, IconButton } from "react-native-paper";
import { BrandColors } from "../../theme/brand";
import { TopBarWalletMenu } from "../top-bar/top-bar-ui";

type HomeHeaderProps = {
  onSearchPress: () => void;
  onMenuPress: () => void;
};

export function HomeHeader({ onSearchPress, onMenuPress }: HomeHeaderProps) {
  return (
    <View style={styles.container}>
      <View style={styles.brandGroup}>
        <Image
          source={require("../../../assets/icon.png")}
          style={styles.logo}
          resizeMode="contain"
        />
        <Text variant="titleLarge" style={styles.title}>
          QuantVault
        </Text>
      </View>

      <View style={styles.actions}>
        <IconButton
          icon="magnify"
          iconColor={BrandColors.textPrimary}
          size={22}
          onPress={onSearchPress}
          style={styles.iconBtn}
        />
        <View style={styles.walletWrap}>
          <TopBarWalletMenu compact />
        </View>
        <IconButton
          icon="menu"
          iconColor={BrandColors.textPrimary}
          size={24}
          onPress={onMenuPress}
          style={styles.iconBtn}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 12,
    paddingVertical: 8,
    backgroundColor: BrandColors.background,
  },
  brandGroup: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    flexShrink: 1,
  },
  logo: {
    width: 32,
    height: 32,
    borderRadius: 8,
  },
  title: {
    color: BrandColors.textPrimary,
    fontWeight: "700",
    fontSize: 20,
  },
  actions: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconBtn: {
    margin: 0,
  },
  walletWrap: {
    transform: [{ scale: 0.9 }],
  },
});
