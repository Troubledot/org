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
      <Controller globalSceneOptions={{ triggerHook: 'onLeave' }}>
        <Scene triggerHook="onLeave" duration={500} pin>
          <Scene triggerElement="#trigger" duration={160}>
            {(progress: any) => (
              <Tween
                to={{
                  background: '#000000'
                }}
                totalProgress={progress}
                paused
              >
                <section className={styles.panel + ' ' + styles.first}>
                  <div id="trigger" className={styles.triggerH1} />
                  <Earth />
                  <Scene triggerElement="#trigger" duration={160}>
                    {(progress: any) => (
                      <Tween
                        to={{
                          opacity: 0
                        }}
                        totalProgress={progress}
                        paused
                      >
                        <h1>ORIGIN</h1>
                      </Tween>
                    )}
                  </Scene>
                </section>
              </Tween>
            )}
          </Scene>
        </Scene>
        <Scene>
          <section className={styles.panel + ' ' + styles.second}></section>
        </Scene>
      </Controller>
    </div>
  );
};

export default withRouter(Home);
