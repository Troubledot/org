interface Window {
  unisat: any;
  okxwallet: any;
}

declare module 'react-scrollmagic' {
  import * as React from 'react';
  interface PinSettings {
    pushFollowers?: boolean;
    spacerClass?: string;
  }
  interface SceneProps {
    duration?: number;
    offset?: number;
    triggerElement?: string | object | null;
    triggerHook?: number | string;
    reverse?: boolean;
    loglevel?: number;
    indicators?: boolean;
    classToggle?: string | [string, string];
    pin?: boolean | string;
    pinSettings?: PinSettings;
    enabled?: boolean;
    progressEvents?: boolean;
  }
  interface ControllerProps {
    container?: string | object;
    globalSceneOptions?: object;
    vertical?: boolean;
    loglevel?: number;
    refreshInterval?: number;
  }

  export class Scene extends React.Component<SceneProps> {}

  export class Controller extends React.Component<ControllerProps> {}
}
