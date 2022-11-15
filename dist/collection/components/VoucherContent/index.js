import { h, } from '@stencil/core';
import { parse } from 'markdown';
import { state } from '../../store/voucher-detail';
export class VoucherContent {
  // eslint-disable-next-line class-methods-use-this
  render() {
    return (h("div", { class: "voucher-content" }, h("div", { class: "title" }, state.voucher.title), h("div", { class: "content" }, state.voucher.subTitle), h("img", { class: "banner", src: state.voucher.banner }), h("div", { class: "title" }, "\u0110i\u1EC1u ki\u1EC7n \u00E1p d\u1EE5ng"), state.voucher.condition && h("div", { class: "content", innerHTML: parse(state.voucher.condition) })));
  }
  static get is() { return "voucher-content"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["index.css"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["index.css"]
    };
  }
}
