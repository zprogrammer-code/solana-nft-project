import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Card, Text, Button, Chip, Divider } from 'react-native-paper';
import { BrandColors } from '../theme/brand';

export function StrategyCard() {
  return (
    <Card style={styles.card}>
      <Card.Title
        title="NVDA/QQQ 8-18 Momentum Swing"
        subtitle="Verified Track Record • 6 Month Paper/Live"
        titleStyle={styles.title}
        subtitleStyle={styles.subtitle}
      />
      <Card.Content>
        <View style={styles.chipRow}>
          <Chip icon="chart-line" style={styles.chip} textStyle={styles.chipText}>
            Win Rate: 78.4%
          </Chip>
          <Chip icon="shield-check" style={styles.chip} textStyle={styles.chipText}>
            Sharpe: 2.14
          </Chip>
        </View>

        <Divider style={styles.divider} />

        <Text variant="titleSmall" style={styles.sectionTitle}>
          Strategy Parameters:
        </Text>
        <Text variant="bodySmall" style={styles.paramText}>
          • Trigger: Buy on 8% Moving Avg Dip
        </Text>
        <Text variant="bodySmall" style={styles.paramText}>
          • Exit: Sell on 18% Recovery
        </Text>
        <Text variant="bodySmall" style={styles.paramText}>
          • Max Drawdown: -6.2%
        </Text>

        <Divider style={styles.divider} />

        <View style={styles.priceRow}>
          <Text variant="titleMedium" style={styles.priceLabel}>
            Mint Price:
          </Text>
          <Text variant="titleLarge" style={styles.priceText}>
            1.5 SOL
          </Text>
        </View>
      </Card.Content>
      <Card.Actions style={styles.actions}>
        <Button
          mode="contained"
          buttonColor={BrandColors.purple}
          textColor="#FFF"
          onPress={() => console.log('Minting Strategy NFT...')}
        >
          Mint Strategy NFT (12 Left)
        </Button>
      </Card.Actions>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    marginBottom: 8,
    borderRadius: 12,
    backgroundColor: BrandColors.surface,
  },
  title: {
    color: BrandColors.textPrimary,
  },
  subtitle: {
    color: BrandColors.textSecondary,
  },
  chipRow: {
    flexDirection: 'row',
    gap: 8,
    marginVertical: 8,
    flexWrap: 'wrap',
  },
  chip: {
    backgroundColor: BrandColors.surfaceElevated,
  },
  chipText: {
    color: BrandColors.purpleLight,
  },
  divider: {
    marginVertical: 12,
    backgroundColor: BrandColors.border,
  },
  sectionTitle: {
    fontWeight: '600',
    marginBottom: 4,
    color: BrandColors.textPrimary,
  },
  paramText: {
    color: BrandColors.textSecondary,
    lineHeight: 20,
  },
  priceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  priceLabel: {
    color: BrandColors.textPrimary,
  },
  priceText: {
    color: BrandColors.purpleLight,
    fontWeight: 'bold',
  },
  actions: {
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
});
