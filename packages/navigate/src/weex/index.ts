import { PushOptions, PopOptions, GoOptions } from '../types';


declare const __weex_require__: any;

let weexModule: any;
function getNavigator() {
  return weexModule = weexModule || __weex_require__('@weex-module/navigator');
}

const push = (options: PushOptions): Promise<null> => {
  return new Promise((resolve): void => {
    const { url, animated = true } = options;
    getNavigator().push({
      url,
      animated: animated.toString()
    }, (): void => {
      resolve();
    });
  });
};

const pop = (options?: PopOptions): Promise<null> => {
  return new Promise((resolve): void => {
    const animated = options ? options.animated ? options.animated : true : true;
    getNavigator().pop({
      animated: animated.toString()
    }, (): void => {
      resolve();
    });
  });
};

const go = (options: GoOptions): Promise<null> => {
  return new Promise((resolve, reject): void => {
    const { step, animated = true } = options;
    if (step < 0) {
      pop({
        animated
      }).then(resolve);
    } else {
      reject();
    }
  });
};

export default {
  push,
  pop,
  go
};
