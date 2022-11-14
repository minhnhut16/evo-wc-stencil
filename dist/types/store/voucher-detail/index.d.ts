import type { IVoucher } from '../../types/voucher-detail';
declare const state: {
  voucher: IVoucher;
  loading: boolean;
}, onChange: import("@stencil/store/dist/types").OnChangeHandler<{
  voucher: IVoucher;
  loading: boolean;
}>;
declare const getVoucher: () => Promise<void>;
export { state, getVoucher, onChange };
