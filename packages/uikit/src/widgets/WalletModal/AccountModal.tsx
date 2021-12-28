/* eslint-disable import/no-unresolved */
/* eslint-disable react/require-default-props */
import React from "react";
import Button from "../../components/Button/Button";
import Text from "../../components/Text/Text";
import LinkExternal from "../../components/Link/LinkExternal";
import Flex from "../../components/Box/Flex";
import { Modal as DefaultModal } from "../Modal";
import CopyToClipboard from "./CopyToClipboard";
import { connectorLocalStorageKey } from "./config";
// eslint-disable-next-line import/order
import styled, { DefaultTheme } from "styled-components";

interface Props {
  account: string;
  logout: () => void;
  onDismiss?: () => void;
}

const getBackground = (theme: DefaultTheme) => {
  if (theme.isDark) {
    return "rgb(21 23 26)";
  }
  return "#FFFFFF";
};

const Modal = styled(DefaultModal)`
  background: ${({ theme }) => getBackground(theme)};

  svg {
    fill: blue;
  }
`;

const AccountModal: React.FC<Props> = ({ account, logout, onDismiss = () => null }) => (
  <Modal title="Your wallet" onDismiss={onDismiss}>
    <Text
      fontSize="20px"
      bold
      style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", marginBottom: "8px" }}
    >
      {account}
    </Text>
    <Flex mb="32px">
      {/* change url  */}
      <LinkExternal small href={`https://etherscan.io//address/${account}`} mr="16px">
        View on Etherscan
      </LinkExternal>
      <CopyToClipboard toCopy={account}>Copy Address</CopyToClipboard>
    </Flex>
    <Flex justifyContent="center">
      <Button
        style={{
          background: "#3F43C8",
          color: "white",
        }}
        scale="sm"
        // variant="secondary"
        onClick={() => {
          logout();
          window.localStorage.removeItem(connectorLocalStorageKey);
          onDismiss();
        }}
      >
        Logout
      </Button>
    </Flex>
  </Modal>
);

export default AccountModal;
