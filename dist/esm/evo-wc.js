import { p as promiseResolve, b as bootstrapLazy } from './index-e2b1b8f8.js';

/*
 Stencil Client Patch Browser v2.19.2 | MIT Licensed | https://stenciljs.com
 */
const patchBrowser = () => {
    const importMeta = import.meta.url;
    const opts = {};
    if (importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
    }
    return promiseResolve(opts);
};

patchBrowser().then(options => {
  return bootstrapLazy([["bar-code_3",[[1,"bar-code"],[1,"layout-app"],[1,"voucher-content"]]]], options);
});
