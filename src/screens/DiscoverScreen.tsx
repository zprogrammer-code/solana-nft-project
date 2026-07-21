import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";
import { BrandColors } from "../theme/brand";

export default function DiscoverScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Discover</Text>
      <Text style={styles.subtitle}>
        Browse trending strategies, new listings, and verified collections.
      </Text>
      <View style={styles.placeholder}>
        <Text style={styles.placeholderText}>Use the Home tab to explore all strategies</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BrandColors.background,
    padding: 16,
  },
  title: {
    color: BrandColors.textPrimary,
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 8,
  },
  subtitle: {
    color: BrandColors.textSecondary,
    fontSize: 15,
    marginBottom: 24,
  },
  placeholder: {
    backgroundColor: BrandColors.surfaceElevated,
    borderRadius: 12,
    padding: 32,
    alignItems: "center",
    borderWidth: 1,
    borderColor: BrandColors.border,
  },
  placeholderText: {
    color: BrandColors.textMuted,
    textAlign: "center",
  },
});
