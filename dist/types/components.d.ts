/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "./stencil-public-runtime";
export namespace Components {
    interface BarCode {
    }
    interface LayoutApp {
    }
    interface VoucherContent {
    }
}
declare global {
    interface HTMLBarCodeElement extends Components.BarCode, HTMLStencilElement {
    }
    var HTMLBarCodeElement: {
        prototype: HTMLBarCodeElement;
        new (): HTMLBarCodeElement;
    };
    interface HTMLLayoutAppElement extends Components.LayoutApp, HTMLStencilElement {
    }
    var HTMLLayoutAppElement: {
        prototype: HTMLLayoutAppElement;
        new (): HTMLLayoutAppElement;
    };
    interface HTMLVoucherContentElement extends Components.VoucherContent, HTMLStencilElement {
    }
    var HTMLVoucherContentElement: {
        prototype: HTMLVoucherContentElement;
        new (): HTMLVoucherContentElement;
    };
    interface HTMLElementTagNameMap {
        "bar-code": HTMLBarCodeElement;
        "layout-app": HTMLLayoutAppElement;
        "voucher-content": HTMLVoucherContentElement;
    }
}
declare namespace LocalJSX {
    interface BarCode {
    }
    interface LayoutApp {
    }
    interface VoucherContent {
    }
    interface IntrinsicElements {
        "bar-code": BarCode;
        "layout-app": LayoutApp;
        "voucher-content": VoucherContent;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "bar-code": LocalJSX.BarCode & JSXBase.HTMLAttributes<HTMLBarCodeElement>;
            "layout-app": LocalJSX.LayoutApp & JSXBase.HTMLAttributes<HTMLLayoutAppElement>;
            "voucher-content": LocalJSX.VoucherContent & JSXBase.HTMLAttributes<HTMLVoucherContentElement>;
        }
    }
}
