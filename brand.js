(() => {
  'use strict';
  const asset = new URL('vulquim-wordmark.png', document.currentScript.src).href;
  const excluded = 'script,style,textarea,input,select,option,title,svg,video,[contenteditable],.brand-wordmark-wrap';
  function restore() {
    document.querySelectorAll('.brand-wordmark-wrap').forEach(element => {
      const parent = element.parentNode;
      element.replaceWith(document.createTextNode(element.dataset.brandText || 'Vulquim'));
      parent.normalize();
    });
  }
  function render() {
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        if (!node.parentElement || node.parentElement.closest(excluded)) return NodeFilter.FILTER_REJECT;
        return /Vulquim/i.test(node.nodeValue) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
      }
    });
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach(node => {
      const fragment = document.createDocumentFragment();
      node.nodeValue.split(/(Vulquim)/gi).forEach(text => {
        if (/^Vulquim$/i.test(text)) {
          const wrap = document.createElement('span');
          wrap.className = 'brand-wordmark-wrap';
          wrap.dataset.brandText = text;
          const image = document.createElement('img');
          image.className = 'brand-wordmark';
          image.src = asset;
          image.alt = 'Vulquim';
          image.decoding = 'async';
          wrap.append(image);
          fragment.append(wrap);
        } else fragment.append(document.createTextNode(text));
      });
      node.replaceWith(fragment);
    });
  }
  window.vulquimBrand = { restore, render };
  render();
})();
