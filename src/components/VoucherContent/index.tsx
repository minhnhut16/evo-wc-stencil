import {
  Component, h,
} from '@stencil/core';
import { parse } from 'markdown';
import { state } from '../../store/voucher-detail';

@Component({
  tag: 'voucher-content',
  styleUrl: 'index.css',
  shadow: true,
})
export class VoucherContent {
  // eslint-disable-next-line class-methods-use-this
  render() {
    return (
      <div class="voucher-content">
        <div class="title">{state.voucher.title}</div>
        <div class="content">{state.voucher.subTitle}</div>
        <img class="banner" src={state.voucher.banner}/>
        <div class="title">Điều kiện áp dụng</div>
        {state.voucher.condition && <div class="content" innerHTML={parse(state.voucher.condition)}/>}
      </div>
    );
  }
}
