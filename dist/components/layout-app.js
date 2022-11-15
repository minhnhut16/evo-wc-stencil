import { proxyCustomElement, HTMLElement, h, getAssetPath } from '@stencil/core/internal/client';
import { g as getVoucher, s as state } from './index2.js';

const indexCss = ".layout-app-wrapper{display:-ms-flexbox;display:flex;-ms-flex:auto;flex:auto;-ms-flex-direction:column;flex-direction:column;min-height:0}.layout-app-wrapper .inner{max-width:411px;margin:0 auto;width:100%;background:#ffffff}.layout-app-wrapper .loading{width:100px;margin:0 auto;display:block}@media (min-width: 461px){.layout-app-wrapper{padding:50px 0;background:transparent}}";

const Layout = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.ignore = true;
  }
  // eslint-disable-next-line class-methods-use-this
  componentDidLoad() {
    getVoucher();
  }
  // eslint-disable-next-line class-methods-use-this
  render() {
    return (h("section", { class: "layout-app-wrapper" }, h("div", { class: "inner" }, state.loading
      ? h("img", { class: "loading", src: getAssetPath('./assets/loading.svg') })
      : h("slot", null))));
  }
  static get assetsDirs() { return ["assets"]; }
  static get style() { return indexCss; }
}, [1, "layout-app", {
    "ignore": [32]
  }]);
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
