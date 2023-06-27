import React, { useState, useEffect } from 'react';
import Wallet from '../components/wallet';
import Link from 'next/link';
import classNames from 'classnames/bind';
import Router, { useRouter } from 'next/router';
import { route } from 'next/dist/server/router';
import styles from '../styles/layout.module.scss';
import { concat } from 'ethers/lib/utils';
const cx = classNames.bind(styles);

const Header = () => {
  const [openState, setopenState] = useState(false);

  const router = useRouter();
  const [account, setAccount] = useState('');

  const connectWallet = async () => {
    if (typeof window.unisat !== 'undefined') {
      let accounts = await window.unisat.requestAccounts();
      setAccount(accounts[0]);
    } else {
      alert('UniSat Wallet is not installed!');
    }
  };

  const connectWalletOKX = async () => {
    if (typeof window.okxwallet !== 'undefined') {
      const res = await window.okxwallet.requestWallets(true);
      setAccount(res[0].address[0].address);
    } else {
      alert('OKX Wallet is not installed!');
    }
  };

  return (
    <header className={styles.header}>
      {/* <Wallet /> */}
      <div className={styles.inner}>
        <Link href="/" passHref>
          <i className={styles.logo}></i>
        </Link>
        <div className={styles.settings}>
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
      </div>
    </header>
  );
};

export default Header;
