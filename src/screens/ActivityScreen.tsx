import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";
import { BrandColors } from "../theme/brand";

export default function ActivityScreen() {
  const activities = [
    { type: "mint", name: "NVDA/QQQ 8-18 Swing", price: "1.50 SOL", time: "2h ago" },
    { type: "list", name: "SOL Momentum Alpha", price: "0.95 SOL", time: "5h ago" },
    { type: "sale", name: "Meme Sniper Pro", price: "0.45 SOL", time: "1d ago" },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Activity</Text>
      {activities.map((item, i) => (
        <View key={i} style={styles.row}>
          <View style={styles.dot} />
          <View style={styles.info}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.meta}>
              {item.type.toUpperCase()} · {item.time}
            </Text>
          </View>
          <Text style={styles.price}>{item.price}</Text>
        </View>
      ))}
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
    marginBottom: 20,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 14,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: BrandColors.border,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: BrandColors.purple,
    marginRight: 12,
  },
  info: { flex: 1 },
  name: {
    color: BrandColors.textPrimary,
    fontSize: 15,
    fontWeight: "600",
  },
  meta: {
    color: BrandColors.textMuted,
    fontSize: 12,
    marginTop: 2,
  },
  price: {
    color: BrandColors.purpleLight,
    fontWeight: "700",
  },
});
