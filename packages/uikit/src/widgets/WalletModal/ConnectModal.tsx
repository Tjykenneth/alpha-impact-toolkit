/* eslint-disable react/require-default-props */
import React from "react";
import styled, { DefaultTheme } from "styled-components";
import { Modal as DefaultModal } from "../Modal";
import WalletCard from "./WalletCard";
import config from "./config";
import { Login } from "./types";

interface Props {
  login: Login;
  onDismiss?: () => void;
}
const getBackground = (theme: DefaultTheme) => {
  if (theme.isDark) {
    return "rgb(21 23 26)";
  }
  return "#FFFFFF";
};

const Modal = styled(DefaultModal)`
  ::after {
    content: "";
    position: absolute;
    top: 70px;
    left: 0;
    width: 100%;
    height: 2px;
    background-image: linear-gradient(to right, rgb(95, 195, 228) 0%, rgb(229, 93, 135) 100%) !important;
  }

  background: ${({ theme }) => getBackground(theme)};
  position: relative;

  > :first-child {
    border-bottom: none;
  }

  svg {
    fill: blue;
  }
`;

const ConnectModal: React.FC<Props> = ({ login, onDismiss = () => null }) => (
  <Modal title="Connect to a wallet" onDismiss={onDismiss}>
    {config.map((entry, index) => (
      <WalletCard
        key={entry.title}
        login={login}
        walletConfig={entry}
        onDismiss={onDismiss}
        mb={index < config.length - 1 ? "8px" : "0"}
      />
    ))}
  </Modal>
);

export default ConnectModal;
