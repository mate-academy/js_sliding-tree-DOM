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

    if (headerSpan && headerSpan.tagName !== 'SPAN') {
      const newSpan = document.createElement('span');

      newSpan.className = 'tree-label';

      while (headerSpan.firstChild) {
        newSpan.appendChild(headerSpan.firstChild);
      }

      li.replaceChild(newSpan, headerSpan);
      headerSpan = newSpan;
    }

    if (!headerSpan) {
      const nodes = Array.from(li.childNodes).filter(
        (n) => n.nodeName !== 'UL',
      );

      headerSpan = document.createElement('span');
      headerSpan.className = 'tree-label';

      const textNode = nodes.find(
        (n) => n.nodeType === Node.TEXT_NODE && n.textContent !== '',
      );

      if (textNode) {
        headerSpan.textContent = textNode.textContent;
        li.replaceChild(headerSpan, textNode);
      } else {
        headerSpan.textContent = '';
        li.insertBefore(headerSpan, childUl);
      }
    }

    headerSpan.style.cursor = 'pointer';
    headerSpan.style.userSelect = 'none';

    childUl.style.display = 'block';
    childUl.style.overflow = 'hidden';
    childUl.style.transition = 'max-height 260ms ease, opacity 260ms ease';
    childUl.style.maxHeight = 'none';
    childUl.style.opacity = '1';
    childUl.style.pointerEvents = 'auto';
    childUl.dataset.open = 'true';

    function openUl(ul) {
      ul.style.display = 'block';
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

      ul.addEventListener(
        'transitionend',
        (e) => {
          if (e.propertyName === 'max-height' && ul.dataset.open === 'false') {
            ul.style.display = 'none';
          }
        },
        { once: true },
      );
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
