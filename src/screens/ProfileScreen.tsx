import { StyleSheet, View, Image } from "react-native";
import { Text, Button } from "react-native-paper";
import { BrandColors } from "../theme/brand";

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require("../../assets/icon.png")}
          style={styles.avatar}
          resizeMode="contain"
        />
        <Text style={styles.username}>QuantVault User</Text>
        <Text style={styles.wallet}>Connect wallet to view profile</Text>
      </View>
      <View style={styles.stats}>
        <View style={styles.stat}>
          <Text style={styles.statNum}>0</Text>
          <Text style={styles.statLabel}>Owned</Text>
        </View>
        <View style={styles.stat}>
          <Text style={styles.statNum}>0</Text>
          <Text style={styles.statLabel}>Listed</Text>
        </View>
        <View style={styles.stat}>
          <Text style={styles.statNum}>0</Text>
          <Text style={styles.statLabel}>Offers</Text>
        </View>
      </View>
      <Button mode="contained" buttonColor={BrandColors.purple} textColor="#FFF">
        Edit Profile
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BrandColors.background,
    padding: 16,
  },
  header: {
    alignItems: "center",
    marginBottom: 24,
    paddingTop: 16,
  },
  avatar: {
    width: 72,
    height: 72,
    borderRadius: 16,
    marginBottom: 12,
  },
  username: {
    color: BrandColors.textPrimary,
    fontSize: 20,
    fontWeight: "700",
  },
  wallet: {
    color: BrandColors.textMuted,
    fontSize: 13,
    marginTop: 4,
  },
  stats: {
    flexDirection: "row",
    backgroundColor: BrandColors.surfaceElevated,
    borderRadius: 12,
    padding: 16,
    marginBottom: 24,
    borderWidth: 1,
    borderColor: BrandColors.border,
  },
  stat: {
    flex: 1,
    alignItems: "center",
  },
  statNum: {
    color: BrandColors.textPrimary,
    fontSize: 20,
    fontWeight: "700",
  },
  statLabel: {
    color: BrandColors.textMuted,
    fontSize: 12,
    marginTop: 4,
  },
});
