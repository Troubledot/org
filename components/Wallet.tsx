import React, { useState } from 'react';
import styles from '../styles/layout.module.scss';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast, ToastOptions } from 'react-toastify';
const Wallet = () => {
  const [account, setAccount] = useState('');
  const toastConfig: ToastOptions = {
    position: 'top-center',
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'dark'
  };
  const connectWallet = async () => {
    if (typeof window.unisat !== 'undefined') {
      let accounts = await window.unisat.requestAccounts();
      setAccount(accounts[0]);
    } else {
      toast.error('UniSat Wallet is not installed!', toastConfig);
    }
  };

  const connectWalletOKX = async () => {
    if (typeof window.okxwallet !== 'undefined') {
      const res = await window.okxwallet.requestWallets(true);
      setAccount(res[0].address[0].address);
    } else {
      toast.error('OKX Wallet is not installed!', toastConfig);
    }
  };

  return (
    <div className={styles.settings}>
      <ToastContainer />
      <div className={styles.wallet}>
        {!account ? (
          <div className={styles.wallet_inner}>
            <button>Connect Wallet</button>
            <ul>
              <li>
                <button className={styles.wallet_btn} onClick={() => connectWallet()}>
                  Connect Unisat Wallet
                </button>
              </li>
              <li>
                <button className={styles.wallet_btn} onClick={() => connectWalletOKX()}>
                  Connect OKX Wallet
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <button className={styles.wallet_btn}>{account}</button>
        )}
      </div>
    </div>
  );
};

export default Wallet;
