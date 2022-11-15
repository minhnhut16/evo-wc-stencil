import { r as registerInstance, h } from './index-b99e61ae.js';
import { g as getVoucher } from './index-10467ef7.js';

const indexCss = ".layout-app-wrapper{display:-ms-flexbox;display:flex;-ms-flex:auto;flex:auto;-ms-flex-direction:column;flex-direction:column;min-height:0}.layout-app-wrapper .inner{max-width:411px;margin:0 auto;width:100%;background:#ffffff}.layout-app-wrapper .loading{width:100px;margin:0 auto;display:block}@media (min-width: 461px){.layout-app-wrapper{padding:50px 0;background:transparent}}";

const Layout = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
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
};
Layout.style = indexCss;

export { Layout as layout_app };
