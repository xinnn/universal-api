import { AsyncStorage } from '../../types';

declare const wx: any;

const AsyncStorage: AsyncStorage = {
  getItem: (key: string): Promise<string | null> => {
    return new Promise((resolve, reject): void => {
      wx.getStorage({
        key,
        success: (res): void => {
          resolve(res.data);
        },
        fail: (e): void => {
          reject(e);
        }
      });
    });
  },
  setItem: (key: string, value: object | string): Promise<null> => {
    return new Promise((resolve, reject): void => {
      wx.setStorage({
        key,
        data: value,
        success: (): void => {
          resolve(null);
        },
        fail: (e): void => {
          reject(e);
        }
      });
    });
  },
  removeItem: (key: string): Promise<null> => {
    return new Promise((resolve, reject): void => {
      wx.removeStorage({
        key,
        success: (): void => {
          resolve(null);
        },
        fail: (e): void => {
          reject(e);
        }
      });
    });
  },
  getAllKeys: (): Promise<string[]> => {
    return new Promise((resolve, reject): void => {
      wx.getStorageInfo({
        success: (res): void => {
          resolve(res.keys);
        },
        fail: (e): void => {
          reject(e);
        }
      });
    });
  },
  clear: (): Promise<null> => {
    return new Promise((resolve, reject): void => {
      wx.clearStorage({
        success: (): void => {
          resolve(null);
        },
        fail: (e): void => {
          reject(e);
        }
      });
    });
  },
  length: (): Promise<number> => {
    return new Promise((resolve, reject): void => {
      wx.getStorageInfo({
        success: (res): void => {
          resolve(res.keys.length);
        },
        fail: (e): void => {
          reject(e);
        }
      });
    });
  }
};

export default AsyncStorage;
