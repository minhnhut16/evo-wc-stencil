// eslint-disable-next-line import/no-extraneous-dependencies
import { createStore } from '@stencil/store';
const { state, onChange } = createStore({
  voucher: {},
  loading: true,
});
const getVoucher = async () => {
  state.loading = true;
  // eslint-disable-next-line no-promise-executor-return
  await new Promise((r) => setTimeout(r, 2000));
  state.voucher = {
    title: 'Giảm giá X% cho các mặt hàng thiết yếu (tối đa 50.000đ)',
    subTitle: 'Áp dụng dành riêng cho Hội viên WIN sử dụng app',
    banner: 'https://i.ibb.co/t2RCzjM/Winmart-banner.png',
    condition: `* Giải quyết mọi nhu cầu hàng ngày của người Việt, giúp cuộc sống của họ trở nên tiện lợi.
* Giải quyết mọi nhu cầu hàng ngày của người Việt, giúp cuộc sống của họ trở nên tiện lợi.
* Giải quyết mọi nhu cầu hàng ngày của người Việt, giúp cuộc sống của họ trở nên tiện lợi.`,
    barcode: 'Hi team',
  };
  state.loading = false;
};
export { state, getVoucher, onChange };
