'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-2b78d98d.js');

/*
 Stencil Client Patch Esm v2.19.2 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return index.promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return index.bootstrapLazy([["bar-code_3.cjs",[[1,"bar-code"],[1,"layout-app",{"ignore":[32]}],[1,"voucher-content",{"ignore":[32]}]]]], options);
  });
};

exports.defineCustomElements = defineCustomElements;
