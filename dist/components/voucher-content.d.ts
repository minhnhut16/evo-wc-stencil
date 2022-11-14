import type { Components, JSX } from "../types/components";

interface VoucherContent extends Components.VoucherContent, HTMLElement {}
export const VoucherContent: {
  prototype: VoucherContent;
  new (): VoucherContent;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
