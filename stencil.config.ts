import { Config } from '@stencil/core';
// eslint-disable-next-line import/no-extraneous-dependencies
import nodePolyfills from 'rollup-plugin-node-polyfills';

export const config: Config = {
  namespace: 'evo-wc',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
  rollupPlugins: {
    after: [
      nodePolyfills(),
    ],
  },
};
