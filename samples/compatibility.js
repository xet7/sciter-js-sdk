
/*
   browser compatibility classes that are not implemented in Sciter core
   but required to run libraries designed for web browsers.

   This file is far not complete, more stuff will be added here ...
*/

export class DocumentEx extends Document {
  createElementNS(ns,tag) { return this.createElement(tag) }
}

export class SVGElement extends Element {
  createSVGRect() {
    return document.createElement("rect");
  }
}
