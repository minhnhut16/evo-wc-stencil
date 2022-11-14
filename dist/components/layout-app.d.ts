import type { Components, JSX } from "../types/components";

interface LayoutApp extends Components.LayoutApp, HTMLElement {}
export const LayoutApp: {
  prototype: LayoutApp;
  new (): LayoutApp;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
