import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Text, Card, Button, Chip, DataTable, Surface } from 'react-native-paper';

// Sample Data Model for your Bot Collections
const BOT_COLLECTIONS = [
  {
    id: 'nvda-qqq-swing',
    name: 'NVDA/QQQ 8-18 Swing',
    avatar: '🤖',
    floor: '1.50 SOL',
    winRate: '78.4%',
    volume: '420 SOL',
    supply: 50,
    listed: 12,
  },
  {
    id: 'tech-crash-alpha',
    name: '2-4W MA Crash Buyer',
    avatar: '🛡️',
    floor: '2.80 SOL',
    winRate: '92.1%',
    volume: '890 SOL',
    supply: 25,
    listed: 4,
  }
];

export function MarketHomeScreen() {
  const [selectedBot, setSelectedBot] = useState<string | null>(null);

  return (
    <ScrollView style={styles.container}>
      {/* App Header */}
      <View style={styles.headerRow}>
        <Text variant="headlineSmall" style={styles.appTitle}>
          QuantVault
        </Text>
        <Button 
          mode="contained" 
          buttonColor="#7C3AED" // Vibrant Purple Main Button
          textColor="#FFF"
          onPress={() => console.log('Connect Wallet')}
        >
          Connect Wallet
        </Button>
      </View>

      {/* Collections Overview Table (Magic Eden Style) */}
      <Text variant="titleMedium" style={styles.sectionHeader}>Top Strategy Collections</Text>
      
      <Surface style={styles.tableSurface} elevation={2}>
        <DataTable>
          <DataTable.Header>
            <DataTable.Title textStyle={styles.tableHeader}>Collection</DataTable.Title>
            <DataTable.Title numeric textStyle={styles.tableHeader}>Win Rate</DataTable.Title>
            <DataTable.Title numeric textStyle={styles.tableHeader}>Floor</DataTable.Title>
          </DataTable.Header>

          {BOT_COLLECTIONS.map((item) => (
            <DataTable.Row 
              key={item.id} 
              onPress={() => setSelectedBot(item.id)}
              style={styles.tableRow}
            >
              <DataTable.Cell textStyle={styles.cellText}>
                {item.avatar} {item.name}
              </DataTable.Cell>
              <DataTable.Cell numeric textStyle={styles.greenText}>
                {item.winRate}
              </DataTable.Cell>
              <DataTable.Cell numeric textStyle={styles.purpleText}>
                {item.floor}
              </DataTable.Cell>
            </DataTable.Row>
          ))}
        </DataTable>
      </Surface>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0F0E17', padding: 16 },
  headerRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 },
  appTitle: { color: '#FFF', fontWeight: 'bold' },
  sectionHeader: { color: '#AAA', marginBottom: 12, textTransform: 'uppercase', fontSize: 12, letterSpacing: 1 },
  tableSurface: { backgroundColor: '#1E1E2E', borderRadius: 12, overflow: 'hidden' },
  tableHeader: { color: '#888', fontWeight: 'bold' },
  tableRow: { borderBottomColor: '#2A2A3C' },
  cellText: { color: '#FFF', fontWeight: '600' },
  greenText: { color: '#10B981', fontWeight: 'bold' },
  purpleText: { color: '#A78BFA', fontWeight: 'bold' },
});