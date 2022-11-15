import { h } from '@stencil/core';
import { getVoucher } from '../../store/voucher-detail';
export class Layout {
  // eslint-disable-next-line class-methods-use-this
  componentDidLoad() {
    getVoucher();
  }
  // eslint-disable-next-line class-methods-use-this
  render() {
    return (h("section", { class: "layout-app-wrapper" }, h("div", { class: "inner" }, h("slot", null))));
  }
  static get is() { return "layout-app"; }
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
  static get assetsDirs() { return ["assets"]; }
}
