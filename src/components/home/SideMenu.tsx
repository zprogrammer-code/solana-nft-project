import React from "react";
import {
  View,
  StyleSheet,
  Modal,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import { Text, Divider } from "react-native-paper";
import MaterialCommunityIcon from "@expo/vector-icons/MaterialCommunityIcons";
import { BrandColors } from "../../theme/brand";
import { useNavigation } from "@react-navigation/native";

type SideMenuProps = {
  visible: boolean;
  onClose: () => void;
};

const MENU_ITEMS = [
  { icon: "account-circle-outline", label: "Profile", route: null },
  { icon: "heart-outline", label: "Favorites", route: null },
  { icon: "history", label: "Activity", route: "Activity" },
  { icon: "cog-outline", label: "Settings", route: "Settings" },
  { icon: "help-circle-outline", label: "Help Center", route: null },
  { icon: "information-outline", label: "About QuantVault", route: null },
] as const;

export function SideMenu({ visible, onClose }: SideMenuProps) {
  const navigation = useNavigation<any>();

  const handlePress = (route: string | null) => {
    onClose();
    if (route === "Settings") {
      navigation.getParent()?.navigate("Settings");
    } else if (route === "Activity") {
      navigation.navigate("Activity");
    }
  };

  return (
    <Modal visible={visible} animationType="fade" transparent>
      <View style={styles.overlay}>
        <TouchableOpacity style={styles.backdrop} activeOpacity={1} onPress={onClose} />
        <View style={styles.drawer}>
          <View style={styles.drawerHeader}>
            <Image
              source={require("../../../assets/icon.png")}
              style={styles.logo}
              resizeMode="contain"
            />
            <View>
              <Text style={styles.drawerTitle}>QuantVault</Text>
              <Text style={styles.drawerSubtitle}>Strategy Marketplace</Text>
            </View>
          </View>

          <Divider style={styles.divider} />

          <ScrollView style={styles.menuList}>
            {MENU_ITEMS.map((item) => (
              <TouchableOpacity
                key={item.label}
                style={styles.menuItem}
                onPress={() => handlePress(item.route)}
              >
                <MaterialCommunityIcon
                  name={item.icon as any}
                  size={22}
                  color={BrandColors.textSecondary}
                />
                <Text style={styles.menuLabel}>{item.label}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>

          <View style={styles.footer}>
            <Text style={styles.footerText}>Powered by Solana</Text>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    flexDirection: "row",
  },
  backdrop: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.6)",
  },
  drawer: {
    width: "78%",
    maxWidth: 320,
    backgroundColor: BrandColors.surface,
    paddingTop: 48,
  },
  drawerHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    paddingHorizontal: 20,
    paddingBottom: 16,
  },
  logo: {
    width: 44,
    height: 44,
    borderRadius: 10,
  },
  drawerTitle: {
    color: BrandColors.textPrimary,
    fontSize: 18,
    fontWeight: "700",
  },
  drawerSubtitle: {
    color: BrandColors.textSecondary,
    fontSize: 13,
    marginTop: 2,
  },
  divider: {
    backgroundColor: BrandColors.border,
  },
  menuList: {
    flex: 1,
    paddingTop: 8,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  menuLabel: {
    color: BrandColors.textPrimary,
    fontSize: 16,
  },
  footer: {
    padding: 20,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: BrandColors.border,
  },
  footerText: {
    color: BrandColors.textMuted,
    fontSize: 12,
  },
});
