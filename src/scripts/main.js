'use strict';

// write code here
const treeItems = document.querySelectorAll('.tree li');

treeItems.forEach((li) => {
  // Знаходимо безпосереднього дочірнього <ul> — тільки пряме піддерево
  const childUl = li.querySelector(':scope > ul');

  if (!childUl) {
    return;
  } // якщо вкладеного списку немає — пропускаємо

  // Шукаємо перший непорожній текстовий вузол (назву гілки)
  let headerTextNode = null;

  for (const node of li.childNodes) {
    if (node.nodeType === Node.TEXT_NODE && node.nodeValue.trim().length > 0) {
      headerTextNode = node;
      break;
    }
  }

  if (!headerTextNode) {
    return;
  } // якщо текстового вузла немає — нічого не робимо

  // Створюємо <span> і замінюємо ним текстовий вузол
  const span = document.createElement('span');

  span.textContent = headerTextNode.nodeValue.trim();
  span.tabIndex = 0; // фокусування з клавіатури
  span.style.cursor = 'pointer';

  li.replaceChild(span, headerTextNode);

  // Початково приховуємо вкладений список
  childUl.style.display = 'none';

  // Функція перемикання
  const toggleSubtree = () => {
    const isHidden = childUl.style.display === 'none';

    childUl.style.display = isHidden ? 'block' : 'none';
  };

  // Клік по заголовку (тільки span) — показує/ховає піддерево
  span.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleSubtree();
  });

  // Додаємо підтримку клавіатури (Enter / Пробіл)
  span.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ' || e.key === 'Spacebar') {
      e.preventDefault();
      toggleSubtree();
    }
  });
});
