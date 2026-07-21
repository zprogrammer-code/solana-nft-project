import React from "react";
import { View, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Text } from "react-native-paper";
import { BrandColors } from "../../theme/brand";
import { StrategyCollection } from "../../data/collections";

type CollectionCardProps = {
  collection: StrategyCollection;
  onPress: (id: string) => void;
  compact?: boolean;
};

export function CollectionCard({ collection, onPress, compact }: CollectionCardProps) {
  const isPositive = collection.change24h >= 0;

  return (
    <TouchableOpacity
      style={[styles.card, compact && styles.cardCompact]}
      activeOpacity={0.7}
      onPress={() => onPress(collection.id)}
    >
      <View style={styles.imageWrap}>
        <Image
          source={require("../../../assets/icon.png")}
          style={styles.image}
          resizeMode="cover"
        />
        <View style={styles.emojiBadge}>
          <Text style={styles.emoji}>{collection.avatar}</Text>
        </View>
      </View>

      <View style={styles.info}>
        <Text style={styles.name} numberOfLines={1}>
          {collection.name}
        </Text>
        <View style={styles.statsRow}>
          <View>
            <Text style={styles.statLabel}>Floor</Text>
            <Text style={styles.floor}>{collection.floor}</Text>
          </View>
          <View style={styles.statRight}>
            <Text style={styles.statLabel}>Win Rate</Text>
            <Text style={styles.winRate}>{collection.winRate}</Text>
          </View>
        </View>
        <View style={styles.bottomRow}>
          <Text style={styles.volume}>Vol {collection.volume24h}</Text>
          <Text style={[styles.change, isPositive ? styles.positive : styles.negative]}>
            {isPositive ? "+" : ""}
            {collection.change24h}%
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: BrandColors.surfaceElevated,
    borderRadius: 12,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: BrandColors.border,
    marginBottom: 12,
  },
  cardCompact: {
    flex: 1,
    marginHorizontal: 4,
  },
  imageWrap: {
    height: 120,
    backgroundColor: BrandColors.surface,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  image: {
    width: 56,
    height: 56,
    borderRadius: 12,
    opacity: 0.35,
  },
  emojiBadge: {
    position: "absolute",
  },
  emoji: {
    fontSize: 36,
  },
  info: {
    padding: 12,
  },
  name: {
    color: BrandColors.textPrimary,
    fontSize: 15,
    fontWeight: "700",
    marginBottom: 8,
  },
  statsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  statLabel: {
    color: BrandColors.textMuted,
    fontSize: 11,
    textTransform: "uppercase",
    letterSpacing: 0.3,
  },
  floor: {
    color: BrandColors.purpleLight,
    fontSize: 14,
    fontWeight: "700",
    marginTop: 2,
  },
  statRight: {
    alignItems: "flex-end",
  },
  winRate: {
    color: BrandColors.green,
    fontSize: 14,
    fontWeight: "700",
    marginTop: 2,
  },
  bottomRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  volume: {
    color: BrandColors.textSecondary,
    fontSize: 12,
  },
  change: {
    fontSize: 12,
    fontWeight: "700",
  },
  positive: {
    color: BrandColors.green,
  },
  negative: {
    color: BrandColors.red,
  },
});
