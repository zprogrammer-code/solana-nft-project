import React, { useEffect, useRef } from "react";
import {
  View,
  StyleSheet,
  Modal,
  TextInput,
  TouchableOpacity,
  FlatList,
  Keyboard,
} from "react-native";
import { Text, IconButton } from "react-native-paper";
import { BrandColors } from "../../theme/brand";
import { StrategyCollection } from "../../data/collections";

type SearchOverlayProps = {
  visible: boolean;
  query: string;
  results: StrategyCollection[];
  onChangeQuery: (text: string) => void;
  onClose: () => void;
  onSelect: (id: string) => void;
};

export function SearchOverlay({
  visible,
  query,
  results,
  onChangeQuery,
  onClose,
  onSelect,
}: SearchOverlayProps) {
  const inputRef = useRef<TextInput>(null);

  useEffect(() => {
    if (visible) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [visible]);

  return (
    <Modal visible={visible} animationType="slide" transparent={false}>
      <View style={styles.container}>
        <View style={styles.searchRow}>
          <IconButton icon="arrow-left" iconColor="#FFF" size={22} onPress={onClose} />
          <TextInput
            ref={inputRef}
            style={styles.input}
            placeholder="Search strategies..."
            placeholderTextColor={BrandColors.textMuted}
            value={query}
            onChangeText={onChangeQuery}
            returnKeyType="search"
            autoCorrect={false}
          />
          {query.length > 0 && (
            <IconButton
              icon="close"
              iconColor={BrandColors.textSecondary}
              size={20}
              onPress={() => onChangeQuery("")}
            />
          )}
        </View>

        {query.length === 0 ? (
          <View style={styles.hint}>
            <Text style={styles.hintTitle}>Popular Searches</Text>
            {["NVDA", "Swing", "Crash Buyer", "Momentum"].map((term) => (
              <TouchableOpacity
                key={term}
                style={styles.hintChip}
                onPress={() => onChangeQuery(term)}
              >
                <Text style={styles.hintText}>{term}</Text>
              </TouchableOpacity>
            ))}
          </View>
        ) : results.length === 0 ? (
          <View style={styles.empty}>
            <Text style={styles.emptyText}>No strategies found for "{query}"</Text>
          </View>
        ) : (
          <FlatList
            data={results}
            keyExtractor={(item) => item.id}
            keyboardShouldPersistTaps="handled"
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.resultRow}
                onPress={() => {
                  Keyboard.dismiss();
                  onSelect(item.id);
                  onClose();
                }}
              >
                <Text style={styles.resultEmoji}>{item.avatar}</Text>
                <View style={styles.resultInfo}>
                  <Text style={styles.resultName}>{item.name}</Text>
                  <Text style={styles.resultMeta}>
                    {item.winRate} win rate · {item.floor}
                  </Text>
                </View>
              </TouchableOpacity>
            )}
          />
        )}
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BrandColors.background,
    paddingTop: 48,
  },
  searchRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 4,
    borderBottomWidth: 1,
    borderBottomColor: BrandColors.border,
  },
  input: {
    flex: 1,
    color: BrandColors.textPrimary,
    fontSize: 16,
    paddingVertical: 14,
  },
  hint: {
    padding: 20,
  },
  hintTitle: {
    color: BrandColors.textSecondary,
    fontSize: 13,
    fontWeight: "600",
    marginBottom: 12,
    textTransform: "uppercase",
    letterSpacing: 0.5,
  },
  hintChip: {
    backgroundColor: BrandColors.surfaceElevated,
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 8,
    marginBottom: 8,
  },
  hintText: {
    color: BrandColors.textPrimary,
    fontSize: 15,
  },
  empty: {
    padding: 32,
    alignItems: "center",
  },
  emptyText: {
    color: BrandColors.textSecondary,
    fontSize: 15,
  },
  resultRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 14,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: BrandColors.border,
  },
  resultEmoji: {
    fontSize: 28,
    marginRight: 14,
  },
  resultInfo: {
    flex: 1,
  },
  resultName: {
    color: BrandColors.textPrimary,
    fontSize: 16,
    fontWeight: "600",
  },
  resultMeta: {
    color: BrandColors.textSecondary,
    fontSize: 13,
    marginTop: 2,
  },
});
