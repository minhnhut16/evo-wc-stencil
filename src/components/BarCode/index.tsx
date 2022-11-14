import {
  Component, h, Host,
} from '@stencil/core';
import { v4 as uuidv4 } from 'uuid';
import JsBarcode from 'jsbarcode';
import { onChange } from '../../store/voucher-detail';

@Component({
  tag: 'bar-code',
  styleUrl: 'index.css',
  shadow: true,
})
export class BarCode {
  barcodeId = `uuid-${uuidv4()}`;

  componentDidLoad() {
    onChange('voucher', (value) => {
      if (value.barcode) {
        JsBarcode(document.querySelector(`#${this.barcodeId}`).shadowRoot?.querySelector('svg'), value.barcode);
      }
    });
  }

  // eslint-disable-next-line class-methods-use-this
  render() {
    return (
      <Host id={this.barcodeId}>
        <div class="bar-code"><svg></svg></div>
      </Host>
    );
  }
}
