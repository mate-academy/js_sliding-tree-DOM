'use strict';

// li nodes from ul.tree
const treeNodes = document.querySelectorAll('ul.tree li');
// this avoids relying on :has()
// we filtered every else nodes li, but kept ones with children
const nodesWithChildren = Array.from(treeNodes).filter( // eslint-disable-line
  (li) => Array.from(li.children).some((el) => el.tagName === 'UL'),
);

/**
 * Toggle visibility of {this} element
 * display: none / block
 */
function toggleVisibility() {
  if (!this) {
    return;
  }

  // get computed style of element
  const isHidden = getComputedStyle(this).display === 'none';

  // if it is hidden - change inline style to it or remove inline style
  this.style.display = isHidden ? '' : 'none';
}

/**
 * Wrap with headline first element(s) before ul in children set
 * and returns wrapper element or null
 *
 * @return {HTMLSpanElement} | null
 */
function wrapHeadline() {
  /**
   * Child UL
   * @type {Element} childUl
   */
  const childUl = this.querySelector('ul');

  if (!childUl) {
    return;
  }

  /**
   * Nodes before UL
   * @type {*[]} headline
   */
  const headline = [];

  for (const node of this.childNodes) {
    if (node === childUl) {
      // Stop on ul
      break;
    }
    // Add node to headline
    headline.push(node);
  }

  /**
   * Span wrapper
   * @type {HTMLSpanElement}
   */
  const newSpan = document.createElement('span');

  newSpan.classList.add('headline');

  // append headline elements to span wrapper
  headline.forEach((el) => newSpan.appendChild(el));

  // insert span wrapper before child UL element
  this.insertBefore(newSpan, childUl);

  return newSpan;
}

/**
 * For each clickable element text node (title)
 * wrap everything in direct children before ul ("title") to span
 * For each clickable element text node add click listener to collapse/expand
 */
nodesWithChildren.forEach((element) => {
  // wrap with span
  const wrapper = wrapHeadline.call(element);

  // add click listener
  wrapper.addEventListener('click', function (e) {
    /**
     * WE STOP execution of top-level node's event handlers
     */
    e.stopPropagation();

    /**
     * Look for next ul element
     */
    let ulElement = this.nextElementSibling;

    while (ulElement && ulElement.tagName !== 'UL') {
      ulElement = ulElement.nextElementSibling;
    }

    // we found ul element to process
    if (ulElement) {
      /**
       * Call from context of found headline element visibility handler
       */
      toggleVisibility.call(ulElement);
    }
  });
});
