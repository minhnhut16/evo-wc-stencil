import { h, Host, } from '@stencil/core';
import { v4 as uuidv4 } from 'uuid';
import JsBarcode from 'jsbarcode';
import { onChange } from '../../store/voucher-detail';
export class BarCode {
  constructor() {
    this.barcodeId = `uuid-${uuidv4()}`;
  }
  componentDidLoad() {
    onChange('voucher', (value) => {
      var _a;
      if (value.barcode) {
        JsBarcode((_a = document.querySelector(`#${this.barcodeId}`).shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector('svg'), value.barcode);
      }
    });
  }
  // eslint-disable-next-line class-methods-use-this
  render() {
    return (h(Host, { id: this.barcodeId }, h("div", { class: "bar-code" }, h("svg", null))));
  }
  static get is() { return "bar-code"; }
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
