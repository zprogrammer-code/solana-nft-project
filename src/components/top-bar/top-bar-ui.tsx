import { Button, IconButton, Menu, useTheme } from "react-native-paper";
import { Account, useAuthorization } from "../../utils/useAuthorization";
import { useMobileWallet } from "../../utils/useMobileWallet";
import { useNavigation } from "@react-navigation/native";
import { ellipsify } from "../../utils/ellipsify";
import { useState } from "react";
import * as Clipboard from "expo-clipboard";
import { Linking } from "react-native";
import { useCluster } from "../cluster/cluster-data-access";

export function TopBarWalletButton({
  selectedAccount,
  openMenu,
  compact,
}: {
  selectedAccount: Account | null;
  openMenu: () => void;
  compact?: boolean;
}) {
  const { connect } = useMobileWallet();
  return (
    <Button
      icon={compact ? undefined : "wallet"}
      mode="contained"
      buttonColor="#7C3AED"
      textColor="#FFF"
      compact={compact}
      style={{ alignSelf: "center" }}
      labelStyle={compact ? { fontSize: 12, marginHorizontal: 4 } : undefined}
      onPress={selectedAccount ? openMenu : connect}
    >
      {selectedAccount
        ? ellipsify(selectedAccount.publicKey.toBase58())
        : compact
          ? "Connect"
          : "Connect Wallet"}
    </Button>
  );
}

export function TopBarSettingsButton() {
  const navigation = useNavigation();
  return (
    <IconButton
      icon="cog"
      mode="contained-tonal"
      onPress={() => {
        navigation.navigate("Settings");
      }}
    />
  );
}

export function TopBarWalletMenu({ compact = false }: { compact?: boolean }) {
  const { selectedAccount } = useAuthorization();
  const { getExplorerUrl } = useCluster();
  const [visible, setVisible] = useState(false);
  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);
  const { disconnect } = useMobileWallet();

  const copyAddressToClipboard = async () => {
    if (selectedAccount) {
      await Clipboard.setStringAsync(selectedAccount.publicKey.toBase58());
    }
    closeMenu();
  };

  const viewExplorer = () => {
    if (selectedAccount) {
      const explorerUrl = getExplorerUrl(
        `account/${selectedAccount.publicKey.toBase58()}`
      );
      Linking.openURL(explorerUrl);
    }
    closeMenu();
  };

  return (
    <Menu
      visible={visible}
      onDismiss={closeMenu}
      anchor={
        <TopBarWalletButton
          selectedAccount={selectedAccount}
          openMenu={openMenu}
          compact={compact}
        />
      }
    >
      <Menu.Item
        onPress={copyAddressToClipboard}
        title="Copy address"
        leadingIcon="content-copy"
      />
      <Menu.Item
        onPress={viewExplorer}
        title="View Explorer"
        leadingIcon="open-in-new"
      />
      <Menu.Item
        onPress={async () => {
          await disconnect();
          closeMenu();
        }}
        title="Disconnect"
        leadingIcon="link-off"
      />
    </Menu>
  );
}
