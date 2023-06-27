import React from 'react';
import { withRouter } from 'next/router';
import Link from 'next/link';
import styles from '../styles/home.module.scss';
import Earth from '../components/Earth';
import Wallet from '../components/Wallet';
import { useEffect, useRef } from 'react';
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from 'react-gsap';

const Home = () => {
  return (
    <div className={styles.wrapper}>
      <Wallet />
      <Controller>
        <Scene triggerHook="onLeave" duration="300%" pin>
          <Timeline wrapper={<div className={styles.pinContainer} />}>
            <section className={styles.panel + ' ' + styles.first}>
              <Earth />
              <div className={styles.container}>
                <h1>ORIGIN</h1>
              </div>
            </section>
            <Tween from={{ x: '-100%' }} to={{ x: '0%' }}>
              <section className={styles.panel + ' ' + styles.turqoise}>
                <span>Panel</span>
              </section>
            </Tween>
            <Tween from={{ x: '100%' }} to={{ x: '0%' }}>
              <section className={styles.panel + ' ' + styles.green}>
                <span>Panel</span>
              </section>
            </Tween>
            <Tween from={{ y: '-100%' }} to={{ y: '0%' }}>
              <section className={styles.panel + ' ' + styles.bordeaux}>
                <span>Panel</span>
              </section>
            </Tween>
          </Timeline>
        </Scene>
      </Controller>
    </div>
  );
};

export default withRouter(Home);
