import {
  Component, h, State, getAssetPath,
} from '@stencil/core';
import { getVoucher, state } from '../../store/voucher-detail';

@Component({
  tag: 'layout-app',
  styleUrl: 'index.css',
  assetsDirs: ['assets'],
  shadow: true,
})
export class Layout {
  // eslint-disable-next-line class-methods-use-this
  componentDidLoad() {
    getVoucher();
  }

  // https://github.com/ionic-team/stencil-store/issues/44 - not render when state on store change issue, need 1 force state
  @State() ignore: boolean = true;

  // eslint-disable-next-line class-methods-use-this
  render() {
    return (
      <section class="layout-app-wrapper">
        <div class="inner">
        {state.loading
          ? <img class="loading" src={getAssetPath('./assets/loading.svg')} />
          : <slot />
          }
        </div>
      </section>
    );
  }
}
