(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.Elm = factory());
}(this, function () { 'use strict';

  return function (name, attrs) {
    attrs = attrs || {};
    var frag = document.createDocumentFragment(),
	el = document.createElement(name);
    for (var attr in attrs) {
      if (attrs.hasOwnProperty(attr)) {
        el.setAttribute(attr, attrs[attr])
      }
    }
    frag.appendChild(el);

    var appendChildren = function () {
      for (var i = 0, iLen = arguments.length ; i < iLen; i++) {
        var child = arguments[i];
        if (Array.isArray(child)) {
          appendChildren.apply(this, child);
        } else if (child instanceof Node) {
          el.appendChild(child);
        } else { // Try to build a text node
          el.innerHTML = child;
        }
      }
      return frag
    };

    return appendChildren
  };
}));
