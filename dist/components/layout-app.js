import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { g as getVoucher } from './index2.js';

const indexCss = ".layout-app-wrapper{display:-ms-flexbox;display:flex;-ms-flex:auto;flex:auto;-ms-flex-direction:column;flex-direction:column;min-height:0}.layout-app-wrapper .inner{max-width:411px;margin:0 auto;width:100%;background:#ffffff}.layout-app-wrapper .loading{width:100px;margin:0 auto;display:block}@media (min-width: 461px){.layout-app-wrapper{padding:50px 0;background:transparent}}";

const Layout = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  // eslint-disable-next-line class-methods-use-this
  componentDidLoad() {
    getVoucher();
  }
  // eslint-disable-next-line class-methods-use-this
  render() {
    return (h("section", { class: "layout-app-wrapper" }, h("div", { class: "inner" }, h("slot", null))));
  }
  static get assetsDirs() { return ["assets"]; }
  static get style() { return indexCss; }
}, [1, "layout-app"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["layout-app"];
  components.forEach(tagName => { switch (tagName) {
    case "layout-app":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, Layout);
      }
      break;
  } });
}

const LayoutApp = Layout;
const defineCustomElement = defineCustomElement$1;

export { LayoutApp, defineCustomElement };
