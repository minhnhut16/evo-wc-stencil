'use strict';

const index = require('./index-0645fa5f.js');

/*
 Stencil Client Patch Browser v2.19.2 | MIT Licensed | https://stenciljs.com
 */
const patchBrowser = () => {
    const importMeta = (typeof document === 'undefined' ? new (require('u' + 'rl').URL)('file:' + __filename).href : (document.currentScript && document.currentScript.src || new URL('evo-wc.cjs.js', document.baseURI).href));
    const opts = {};
    if (importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
    }
    return index.promiseResolve(opts);
};

patchBrowser().then(options => {
  return index.bootstrapLazy([["bar-code_3.cjs",[[1,"bar-code"],[1,"layout-app"],[1,"voucher-content"]]]], options);
});
