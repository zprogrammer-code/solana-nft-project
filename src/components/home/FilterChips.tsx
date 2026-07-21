import React from "react";
import { ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import { Text } from "react-native-paper";
import { BrandColors } from "../../theme/brand";
import { FILTER_CATEGORIES, FilterCategoryId } from "../../data/collections";

type FilterChipsProps = {
  selected: FilterCategoryId;
  onSelect: (id: FilterCategoryId) => void;
};

export function FilterChips({ selected, onSelect }: FilterChipsProps) {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.container}
    >
      {FILTER_CATEGORIES.map((cat) => {
        const active = selected === cat.id;
        return (
          <TouchableOpacity
            key={cat.id}
            style={[styles.chip, active && styles.chipActive]}
            onPress={() => onSelect(cat.id)}
          >
            <Text style={[styles.chipText, active && styles.chipTextActive]}>
              {cat.label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    gap: 8,
  },
  chip: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: BrandColors.surfaceElevated,
    borderWidth: 1,
    borderColor: BrandColors.border,
    marginRight: 8,
  },
  chipActive: {
    backgroundColor: BrandColors.purple,
    borderColor: BrandColors.purple,
  },
  chipText: {
    color: BrandColors.textSecondary,
    fontSize: 14,
    fontWeight: "600",
  },
  chipTextActive: {
    color: BrandColors.textPrimary,
  },
});
