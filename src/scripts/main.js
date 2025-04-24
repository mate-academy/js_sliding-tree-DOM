'use strict';

const treeOnThePage = document.getElementsByClassName('tree')[0];

const setSpanTag = function (element) {
  const isDOMObject = element instanceof Element;

  if (!isDOMObject) {
    return;
  }

  const hasChild = element.children.length > 0;
  const children = element.children;

  if (!hasChild) {
    return null;
  } else {
    for (const child of children) {
      const toEdit = child;

      if (child.tagName === 'LI' && child.children.length > 0) {
        const span = document.createElement('span');

        span.innerHTML = `${toEdit.childNodes[0].nodeValue}`;
        toEdit.replaceChild(span, toEdit.childNodes[0]);
      }

      setSpanTag(child);
    }

    return element;
  }
};

setSpanTag(treeOnThePage);

const pageHeaders = [...document.querySelectorAll('.tree span')];

for (const header of pageHeaders) {
  header.onclick = function (e) {
    const target = e.target;
    const hasNextElementSibling = target.nextElementSibling !== undefined;
    const isChildrenHidden =
      hasNextElementSibling && target.nextElementSibling.children.length > 0
        ? target.nextElementSibling.children[0].style.display === 'none'
        : null;

    if (isChildrenHidden) {
      [...target.nextElementSibling.children].forEach((child) => {
        child.style.display = '';
      });
    } else if (isChildrenHidden === false) {
      [...target.nextElementSibling.children].forEach((child) => {
        child.style.display = 'none';
      });
    }
  };
}
