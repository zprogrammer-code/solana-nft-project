import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Card, Text, Button, Chip, Divider } from 'react-native-paper';

export function StrategyCard() {
  return (
    <Card style={styles.card}>
      <Card.Title 
        title="NVDA/QQQ 8-18 Momentum Swing" 
        subtitle="Verified Track Record • 6 Month Paper/Live" 
      />
      <Card.Content>
        <View style={styles.chipRow}>
          <Chip icon="chart-line" style={styles.chip}>Win Rate: 78.4%</Chip>
          <Chip icon="shield-check" style={styles.chip}>Sharpe: 2.14</Chip>
        </View>

        <Divider style={styles.divider} />

        <Text variant="titleSmall" style={styles.sectionTitle}>Strategy Parameters:</Text>
        <Text variant="bodySmall" style={styles.paramText}>• Trigger: Buy on 8% Moving Avg Dip</Text>
        <Text variant="bodySmall" style={styles.paramText}>• Exit: Sell on 18% Recovery</Text>
        <Text variant="bodySmall" style={styles.paramText}>• Max Drawdown: -6.2%</Text>

        <Divider style={styles.divider} />

        <View style={styles.priceRow}>
          <Text variant="titleMedium">Mint Price:</Text>
          <Text variant="titleLarge" style={styles.priceText}>1.5 SOL</Text>
        </View>
      </Card.Content>
      <Card.Actions style={styles.actions}>
        <Button 
          mode="contained" 
          onPress={() => console.log('Minting Strategy NFT...')}
        >
          Mint Strategy NFT (12 Left)
        </Button>
      </Card.Actions>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: { marginBottom: 16, borderRadius: 12 },
  chipRow: { flexDirection: 'row', gap: 8, marginVertical: 8 },
  chip: { backgroundColor: '#e0f2fe' },
  divider: { marginVertical: 12 },
  sectionTitle: { fontWeight: '600', marginBottom: 4 },
  paramText: { color: '#444', lineHeight: 18 },
  priceRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  priceText: { color: '#7c3aed', fontWeight: 'bold' },
  actions: { paddingHorizontal: 16, paddingBottom: 16 }
});