const DOMNodeCollection = require('./dom_node_collection')

const $l = function(arg) {
  let nodeList = document.querySelectorAll(arg);
  
  if (arg instanceof HTMLElement) {
     new DOMNodeCollection([arg])
  }
}

window.$l = $l