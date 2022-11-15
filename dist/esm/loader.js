import { p as promiseResolve, b as bootstrapLazy } from './index-ae62b7c7.js';

/*
 Stencil Client Patch Esm v2.19.2 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return bootstrapLazy([["bar-code_3",[[1,"bar-code"],[1,"layout-app",{"ignore":[32]}],[1,"voucher-content",{"ignore":[32]}]]]], options);
  });
};

export { defineCustomElements };
