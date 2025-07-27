'use strict';

// write code here
document.querySelectorAll('.tree > li').forEach(function (element) {
  if (element.querySelector('ul')) {
    const ul1 = element.querySelector('ul').outerHTML;

    element.querySelector('ul').remove();

    element.innerHTML =
      '<span class="click-trigger">' +
      element.textContent.trim() +
      '</span>' +
      ul1;
  } else {
    element.innerHTML =
      '<span class="click-trigger">' + element.textContent.trim() + '</span>';
  }

  element.querySelectorAll('ul > li').forEach(function (element2) {
    if (element2.querySelector('ul')) {
      const ul2 = element2.querySelector('ul').outerHTML;

      element2.querySelector('ul').remove();

      element2.innerHTML =
        '<span class="click-trigger">' +
        element2.textContent.trim() +
        '</span>' +
        ul2;
    } else {
      element2.innerHTML =
        '<span class="click-trigger">' +
        element2.textContent.trim() +
        '</span>';
    }
  });
});

document.querySelector('.tree').addEventListener('click', function (e) {
  const trigger = e.target.closest('.click-trigger');

  if (trigger) {
    const ul = trigger.parentNode.querySelector('ul');

    if (ul) {
      ul.style.display = ul.style.display === 'none' ? 'block' : 'none';
    }
  }
});
