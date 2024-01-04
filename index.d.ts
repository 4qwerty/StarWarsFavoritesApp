declare module '*.png';
declare module '*.svg';

declare module 'react-native-clear-cache' {
  class ClearCache {
    static getAppCacheSize: (callback: (size: string, sizeName: string) => void) => void;
    static clearAppCache: (callback: () => void) => void;
  }

  export default ClearCache;
}
