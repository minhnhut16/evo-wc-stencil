import { Component, h } from '@stencil/core';
import { getVoucher } from '../../store/voucher-detail';

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

  // eslint-disable-next-line class-methods-use-this
  render() {
    return (
      <section class="layout-app-wrapper">
        <div class="inner">
          <slot />
        </div>
      </section>
    );
  }
}
