var _class, _temp;

import { WeElement, define, h } from "omi"; // JS

const componentName = ((_temp = _class = class componentName extends WeElement {
  render() {
    return h("div", null, h("p", null, this.data.title));
  }

  install() {
    this.data = {
      title: "omi123"
    };
  }
}),
(_class.css = `p{color:#58bc58}
`),
_temp);
define("component-name", componentName);
