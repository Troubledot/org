import React from 'react';
import { withRouter } from 'next/router';
import Link from 'next/link';
import styles from '../styles/home.module.scss';
import Header from '../layout/Header';
import Earth from '../components/Earth';
import 'animate.css';

const Home = () => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <Earth />
    </div>
  );
};

export default withRouter(Home);
