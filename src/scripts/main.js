'use strict';

document.addEventListener('DOMContentLoaded', function () {
  const tree = document.querySelector('.tree');

  if (!tree) {
    return;
  }

  const listItems = tree.querySelectorAll('li');

  listItems.forEach(function (li) {
    let firstList = null;

    for (const child of li.childNodes) {
      if (
        child.nodeType === 1 &&
        (child.tagName === 'UL' || child.tagName === 'OL')
      ) {
        firstList = child;
        break;
      }
    }

    const nodesToWrap = [];

    for (const child of li.childNodes) {
      if (child === firstList) {
        break;
      }

      if (child.nodeType === 1 && child.tagName === 'SPAN') {
        continue;
      }

      if (
        (child.nodeType === 3 && child.textContent.trim()) ||
        (child.nodeType === 1 &&
          [
            'B',
            'I',
            'EM',
            'STRONG',
            'A',
            'SMALL',
            'SUB',
            'SUP',
            'CODE',
          ].includes(child.tagName))
      ) {
        nodesToWrap.push(child);
      }
    }

    if (nodesToWrap.length) {
      const span = document.createElement('span');

      nodesToWrap.forEach((node) => span.appendChild(node));
      li.insertBefore(span, li.firstChild);
    }
  });

  const headerSpans = tree.querySelectorAll('li > span');

  headerSpans.forEach(function (span) {
    span.addEventListener('click', function (e) {
      e.stopPropagation();

      const next = span.nextElementSibling;

      if (next && (next.tagName === 'UL' || next.tagName === 'OL')) {
        next.hidden = !next.hidden;
      }
    });
  });
});
