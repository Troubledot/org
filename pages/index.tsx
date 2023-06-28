import React from 'react';
import { withRouter } from 'next/router';
import Link from 'next/link';
import styles from '../styles/home.module.scss';
import Earth from '../components/Earth';
import Wallet from '../components/Wallet';
import { useEffect, useRef } from 'react';
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from 'react-gsap';
let y = -17.5;
const Home = () => {
  return (
    <div className={styles.wrapper}>
      <Wallet />
      <Controller globalSceneOptions={{ triggerHook: 'onLeave' }}>
        <Scene duration={2000} pin>
          {(progress: any) => (
            <div className={styles.panel + ' ' + styles.first}>
              <Timeline totalProgress={progress} paused>
                <Tween
                  from={{
                    opacity: 1
                  }}
                  to={{
                    opacity: 0
                  }}
                  ease="Strong.easeOut"
                >
                  <div className={styles.background}></div>
                </Tween>
                <Tween
                  to={{
                    opacity: 0,
                    filter: 'blur(5px)'
                  }}
                  totalProgress={progress * 1.5}
                  paused
                >
                  <h1>ORIGIN</h1>
                  <Earth scale={1 + progress > 1.15 ? 1.15 : 1 + progress} position={[0, -17.5 - progress * 11, 0]} />
                </Tween>
                <Timeline
                  target={
                    <div className={styles.title}>
                      <h2>This is a cool heading</h2>
                    </div>
                  }
                >
                  <Tween to={{ opacity: 1 }} />
                </Timeline>
              </Timeline>
            </div>
          )}
        </Scene>
        <Scene>
          <section className={styles.panel + ' ' + styles.second}></section>
        </Scene>
      </Controller>
    </div>
  );
};

export default withRouter(Home);
