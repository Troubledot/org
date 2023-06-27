import '../styles/globals.scss';
import { UseWalletProvider } from 'use-wallet';

function MyApp({ Component, pageProps }) {
  return (
    <UseWalletProvider
      chainId={0x61}
      connectors={{
        walletconnect: {
          rpcUrl: 'https://eth-mainnet.g.alchemy.com/v2/LbGQ_gbJWj0-yJwk7p514xKZkfdXiEcI'
        }
      }}
    >
      <Component {...pageProps} />
    </UseWalletProvider>
  );
}

export default MyApp;
