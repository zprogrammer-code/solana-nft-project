import React, { useMemo } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { Text } from "react-native-paper";
import MaterialCommunityIcon from "@expo/vector-icons/MaterialCommunityIcons";
import { BrandColors } from "../theme/brand";
import {
  STRATEGY_COLLECTIONS,
  StrategyCollection,
  FilterCategoryId,
} from "../data/collections";
import { HomeHeader } from "../components/home/HomeHeader";
import { FilterChips } from "../components/home/FilterChips";
import { CollectionCard } from "../components/home/CollectionCard";
import { SearchOverlay } from "../components/home/SearchOverlay";
import { SideMenu } from "../components/home/SideMenu";

type MarketHomeScreenProps = {
  onSelectStrategy?: (id: string) => void;
};

function RankedCollectionRow({
  rank,
  item,
  onPress,
}: {
  rank: number;
  item: StrategyCollection;
  onPress: () => void;
}) {
  const isPositive = item.change24h >= 0;
  return (
    <TouchableOpacity style={styles.rankRow} onPress={onPress} activeOpacity={0.7}>
      <Text style={styles.rankNum}>{rank}</Text>
      <View style={styles.rankAvatar}>
        <Image
          source={require("../../assets/icon.png")}
          style={styles.rankIcon}
          resizeMode="contain"
        />
        <Text style={styles.rankEmoji}>{item.avatar}</Text>
      </View>
      <View style={styles.rankInfo}>
        <Text style={styles.rankName} numberOfLines={1}>
          {item.name}
        </Text>
        <Text style={styles.rankMeta}>{item.holders} holders</Text>
      </View>
      <View style={styles.rankStats}>
        <Text style={styles.rankWinRate}>{item.winRate}</Text>
        <Text style={[styles.rankChange, isPositive ? styles.positive : styles.negative]}>
          {isPositive ? "+" : ""}
          {item.change24h}%
        </Text>
      </View>
      <Text style={styles.rankFloor}>{item.floor}</Text>
    </TouchableOpacity>
  );
}

export function MarketHomeScreen({ onSelectStrategy }: MarketHomeScreenProps) {
  const [searchVisible, setSearchVisible] = React.useState(false);
  const [menuVisible, setMenuVisible] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState("");
  const [activeFilter, setActiveFilter] = React.useState<FilterCategoryId>("all");

  const featuredCollections = STRATEGY_COLLECTIONS.filter((c) => c.featured);

  const filteredCollections = useMemo(() => {
    let items = STRATEGY_COLLECTIONS;
    if (activeFilter !== "all") {
      items = items.filter((c) => c.category === activeFilter);
    }
    return items;
  }, [activeFilter]);

  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return [];
    const q = searchQuery.toLowerCase();
    return STRATEGY_COLLECTIONS.filter(
      (c) =>
        c.name.toLowerCase().includes(q) ||
        c.id.toLowerCase().includes(q) ||
        c.category.includes(q)
    );
  }, [searchQuery]);

  const handleSelect = (id: string) => {
    onSelectStrategy?.(id);
  };

  return (
    <View style={styles.container}>
      <HomeHeader
        onSearchPress={() => setSearchVisible(true)}
        onMenuPress={() => setMenuVisible(true)}
      />

      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <FilterChips selected={activeFilter} onSelect={setActiveFilter} />

        {/* Market stats bar */}
        <View style={styles.statsBar}>
          <View style={styles.statBox}>
            <Text style={styles.statValue}>961 SOL</Text>
            <Text style={styles.statLabel}>24h Volume</Text>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.statBox}>
            <Text style={styles.statValue}>{STRATEGY_COLLECTIONS.length}</Text>
            <Text style={styles.statLabel}>Collections</Text>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.statBox}>
            <Text style={styles.statValue}>2,240</Text>
            <Text style={styles.statLabel}>Traders</Text>
          </View>
        </View>

        {/* Top Strategy Collections - ranked list (your 2 items) */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <MaterialCommunityIcon name="fire" size={18} color={BrandColors.purpleLight} />
            <Text style={styles.sectionTitle}>Top Strategy Collections</Text>
          </View>
          <View style={styles.rankTable}>
            <View style={styles.rankTableHeader}>
              <Text style={[styles.colHeader, styles.colRank]}>#</Text>
              <Text style={[styles.colHeader, styles.colName]}>Collection</Text>
              <Text style={[styles.colHeader, styles.colStat]}>Win Rate</Text>
              <Text style={[styles.colHeader, styles.colFloor]}>Floor</Text>
            </View>
            {featuredCollections.map((item, index) => (
              <RankedCollectionRow
                key={item.id}
                rank={index + 1}
                item={item}
                onPress={() => handleSelect(item.id)}
              />
            ))}
          </View>
        </View>

        {/* Discover grid */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <MaterialCommunityIcon
              name="compass-outline"
              size={18}
              color={BrandColors.purpleLight}
            />
            <Text style={styles.sectionTitle}>
              {activeFilter === "all" ? "Discover Strategies" : `${activeFilter.charAt(0).toUpperCase() + activeFilter.slice(1)} Strategies`}
            </Text>
          </View>
          <View style={styles.grid}>
            {filteredCollections.map((item) => (
              <View key={item.id} style={styles.gridItem}>
                <CollectionCard collection={item} onPress={handleSelect} compact />
              </View>
            ))}
          </View>
        </View>

        {/* Recently listed */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <MaterialCommunityIcon name="clock-outline" size={18} color={BrandColors.purpleLight} />
            <Text style={styles.sectionTitle}>Recently Listed</Text>
          </View>
          {STRATEGY_COLLECTIONS.filter((c) => c.category === "new" || c.category === "verified")
            .slice(0, 3)
            .map((item) => (
              <CollectionCard key={`recent-${item.id}`} collection={item} onPress={handleSelect} />
            ))}
        </View>
      </ScrollView>

      <SearchOverlay
        visible={searchVisible}
        query={searchQuery}
        results={searchResults}
        onChangeQuery={setSearchQuery}
        onClose={() => {
          setSearchVisible(false);
          setSearchQuery("");
        }}
        onSelect={handleSelect}
      />

      <SideMenu visible={menuVisible} onClose={() => setMenuVisible(false)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BrandColors.background,
  },
  scroll: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 32,
  },
  statsBar: {
    flexDirection: "row",
    marginHorizontal: 16,
    backgroundColor: BrandColors.surfaceElevated,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: BrandColors.border,
    paddingVertical: 16,
    marginBottom: 8,
  },
  statBox: {
    flex: 1,
    alignItems: "center",
  },
  statValue: {
    color: BrandColors.textPrimary,
    fontSize: 16,
    fontWeight: "700",
  },
  statLabel: {
    color: BrandColors.textMuted,
    fontSize: 11,
    marginTop: 4,
    textTransform: "uppercase",
    letterSpacing: 0.3,
  },
  statDivider: {
    width: 1,
    backgroundColor: BrandColors.border,
  },
  section: {
    paddingHorizontal: 16,
    marginTop: 16,
  },
  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginBottom: 12,
  },
  sectionTitle: {
    color: BrandColors.textPrimary,
    fontSize: 16,
    fontWeight: "700",
  },
  rankTable: {
    backgroundColor: BrandColors.surfaceElevated,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: BrandColors.border,
    overflow: "hidden",
  },
  rankTableHeader: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: BrandColors.border,
  },
  colHeader: {
    color: BrandColors.textMuted,
    fontSize: 11,
    fontWeight: "600",
    textTransform: "uppercase",
    letterSpacing: 0.3,
  },
  colRank: { width: 24 },
  colName: { flex: 1 },
  colStat: { width: 64, textAlign: "right" },
  colFloor: { width: 72, textAlign: "right" },
  rankRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    paddingVertical: 12,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: BrandColors.border,
  },
  rankNum: {
    width: 24,
    color: BrandColors.textMuted,
    fontSize: 14,
    fontWeight: "600",
  },
  rankAvatar: {
    width: 40,
    height: 40,
    marginRight: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  rankIcon: {
    width: 36,
    height: 36,
    borderRadius: 8,
    position: "absolute",
    opacity: 0.3,
  },
  rankEmoji: {
    fontSize: 22,
  },
  rankInfo: {
    flex: 1,
    marginRight: 8,
  },
  rankName: {
    color: BrandColors.textPrimary,
    fontSize: 14,
    fontWeight: "600",
  },
  rankMeta: {
    color: BrandColors.textMuted,
    fontSize: 11,
    marginTop: 2,
  },
  rankStats: {
    width: 64,
    alignItems: "flex-end",
    marginRight: 8,
  },
  rankWinRate: {
    color: BrandColors.green,
    fontSize: 13,
    fontWeight: "700",
  },
  rankChange: {
    fontSize: 11,
    fontWeight: "600",
    marginTop: 2,
  },
  rankFloor: {
    width: 72,
    color: BrandColors.purpleLight,
    fontSize: 13,
    fontWeight: "700",
    textAlign: "right",
  },
  positive: { color: BrandColors.green },
  negative: { color: BrandColors.red },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginHorizontal: -4,
  },
  gridItem: {
    width: "50%",
    paddingHorizontal: 4,
  },
});
