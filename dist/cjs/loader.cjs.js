'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-46943e84.js');

/*
 Stencil Client Patch Esm v2.19.2 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return index.promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return index.bootstrapLazy([["bar-code_3.cjs",[[1,"bar-code"],[1,"layout-app"],[1,"voucher-content"]]]], options);
  });
};

exports.defineCustomElements = defineCustomElements;
