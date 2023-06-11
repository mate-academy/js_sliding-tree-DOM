'use strict';

const food = {
  'Drink': {
    'Wine': {},
    'Schnaps': {},
  },

  'Fruit': {
    'Red': {
      'Cherry': {},
      'Strawberry': {},
    },
    'Yellow': {
      'Banana': {},
      'Pineapple': {},
    },

  },
};

const tree = document.querySelector('#tree');

function createTree(element, data) {
  function createList(obj) {
    const ul = document.createElement('ul');

    for (const key in obj) {
      const li = document.createElement('li');

      li.textContent = key;
      ul.appendChild(li);

      if (typeof obj[key] === 'object' && Object.keys(obj[key].length > 0)) {
        li.appendChild(createList(obj[key]));
      }
    }

    return ul;
  }

  const list = createList(data);

  element.appendChild(list);
};

const newTree = createTree(tree, food);

newTree();

document.addEventListener('DOMContentLoaded', () => {
  // const tree = document.querySelector('.tree');

  function labelTree(item) {
    console.log(item);

    if (!item.children.length) {
      return;
    };

    for (const child of item.children) {
      console.log(child);

      if (child.tagName === 'LI') {
        const span = document.createElement('span');

        child.prepend(span); // inserting span as first element in list
        span.append(span.nextSibling); // appending the element to span that was supposed to be next to it;
        labelTree(child.querySelector('ul')); // recursion, look for ul inside current li el,
        // if it finds one, start labelTree all over again.
      }

      // console.log(child);
    }
  }

  labelTree(tree);

  tree.addEventListener('click', function(e) {
    if (e.target.tagName !== 'SPAN') {
      return;
    }

    const childrenContainer = e.target.parentNode.querySelector('ul');

    if (!childrenContainer) {
      return;
    };

    childrenContainer.hidden = !childrenContainer.hidden;

    if (childrenContainer.hidden) {
      const nestedLists = childrenContainer.querySelectorAll('ul');

      for (const list of nestedLists) {
        list.hidden = true;
      }
    }
  });
});
