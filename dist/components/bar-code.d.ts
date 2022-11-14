import type { Components, JSX } from "../types/components";

interface BarCode extends Components.BarCode, HTMLElement {}
export const BarCode: {
  prototype: BarCode;
  new (): BarCode;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
