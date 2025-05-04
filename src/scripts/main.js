'use strict';

// --- Фаза 1: Підготовка HTML (Обгортання тексту в SPAN) ---

// Знаходимо всі LI всередині дерева
const listItems = document.querySelectorAll('.tree li');

listItems.forEach((li) => {
  // Шукаємо прямий нащадок UL всередині поточного LI
  const nestedUl = li.querySelector(':scope > ul');

  // Обробляємо тільки ті LI, які мають вкладений UL
  if (nestedUl) {
    let textNode = null;

    // Шукаємо перший непустий текстовий вузол серед нащадків LI
    for (const node of li.childNodes) {
      if (node.nodeType === 3 && node.nodeValue.trim() !== '') {
        textNode = node;
        break; // Знайшли, виходимо
      }
    }

    // Якщо знайшли текстовий вузол
    if (textNode) {
      // Створюємо SPAN
      const span = document.createElement('span');

      // Копіюємо текст (обрізаний) в SPAN
      span.textContent = textNode.nodeValue.trim();
      // Замінюємо текстовий вузол на SPAN
      textNode.replaceWith(span);
    }
  }
});

// --- Фаза 2: Додавання Інтерактивності ---

// Знаходимо всі створені нами SPAN (або ті, що є прямими нащадками LI)
const clickableSpans = document.querySelectorAll('.tree li > span');

// Додаємо обробник кліку до кожного SPAN
clickableSpans.forEach((span) => {
  span.addEventListener('click', () => {
    // Знаходимо батьківський LI для спана, на який клікнули
    const parentLi = span.parentElement;
    // Знаходимо вкладений UL всередині цього LI
    const nestedList = parentLi.querySelector(':scope > ul');

    // Перевіряємо, чи знайдено вкладений список
    if (nestedList) {
      // Перемикаємо видимість списку
      if (nestedList.style.display === 'none') {
        nestedList.style.display = 'block'; // Робимо видимим
      } else {
        nestedList.style.display = 'none'; // Ховаємо
      }
    }
  });
});

// --- Кінець коду ---
