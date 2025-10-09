'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const tree = document.querySelector('.tree');

  if (!tree) {
    return;
  }

  const liWithChildren = Array.from(tree.querySelectorAll('li')).filter(
    (li) => {
      return li.querySelector(':scope > ul');
    },
  );

  liWithChildren.forEach((li) => {
    const childUl = li.querySelector(':scope > ul');

    if (!childUl) {
      return;
    }

    let headerSpan = li.querySelector(':scope > .tree-label');

    if (!headerSpan || headerSpan.tagName !== 'SPAN') {
      const nodes = Array.from(li.childNodes).filter(
        (n) => n.nodeName !== 'UL',
      );

      headerSpan = document.createElement('span');
      headerSpan.className = 'tree-label';

      const textNode = nodes.find(
        (n) => n.nodeType === Node.TEXT_NODE && n.textContent.trim() !== '',
      );

      headerSpan.textContent = textNode ? textNode.textContent.trim() : '';

      if (textNode) {
        li.replaceChild(headerSpan, textNode);
      } else {
        li.insertBefore(headerSpan, childUl);
      }
    }

    headerSpan.style.cursor = 'pointer';
    headerSpan.style.userSelect = 'none';

    childUl.style.overflow = 'hidden';
    childUl.style.transition = 'max-height 260ms ease, opacity 260ms ease';
    childUl.style.maxHeight = '0';
    childUl.style.opacity = '0';
    childUl.style.pointerEvents = 'none';
    childUl.dataset.open = 'false';

    function openUl(ul) {
      ul.style.pointerEvents = 'auto';
      ul.style.opacity = '1';
      ul.style.maxHeight = ul.scrollHeight + 'px';
      ul.dataset.open = 'true';

      ul.addEventListener(
        'transitionend',
        (e) => {
          if (e.propertyName === 'max-height' && ul.dataset.open === 'true') {
            ul.style.maxHeight = 'none';
          }
        },
        { once: true },
      );
    }

    function closeUl(ul) {
      ul.style.pointerEvents = 'none';
      ul.style.opacity = '0';
      ul.style.maxHeight = '0';
      ul.dataset.open = 'false';
    }

    headerSpan.addEventListener('click', () => {
      const isOpen = childUl.dataset.open === 'true';

      if (isOpen) {
        closeUl(childUl);
      } else {
        openUl(childUl);
      }
    });
  });
});
