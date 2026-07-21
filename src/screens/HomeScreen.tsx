import React, { useState } from "react";
import { StyleSheet, View, Modal, TouchableOpacity } from "react-native";
import { Text, IconButton } from "react-native-paper";
import { MarketHomeScreen } from "./MarketScreen";
import { StrategyCard } from "../components/StrategyCard";
import { BrandColors } from "../theme/brand";

export function HomeScreen() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.outerContainer}>
      <MarketHomeScreen
        onSelectStrategy={() => setModalVisible(true)}
      />

      <Modal
        animationType="fade"
        transparent
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <TouchableOpacity
            style={styles.backdropTouch}
            activeOpacity={1}
            onPress={() => setModalVisible(false)}
          />
          <View style={styles.modalCardWrapper}>
            <View style={styles.modalHeader}>
              <Text variant="titleMedium" style={styles.modalTitle}>
                Strategy Details
              </Text>
              <IconButton
                icon="close"
                iconColor="#FFF"
                size={22}
                onPress={() => setModalVisible(false)}
              />
            </View>
            <StrategyCard />
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    backgroundColor: BrandColors.background,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.85)",
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  backdropTouch: {
    ...StyleSheet.absoluteFillObject,
  },
  modalCardWrapper: {
    width: "100%",
    maxHeight: "85%",
    backgroundColor: BrandColors.surfaceElevated,
    borderRadius: 16,
    padding: 12,
    elevation: 24,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.58,
    shadowRadius: 16,
  },
  modalHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
    paddingHorizontal: 8,
  },
  modalTitle: {
    color: BrandColors.textPrimary,
    fontWeight: "bold",
  },
});
