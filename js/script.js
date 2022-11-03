const btnNavEl = document.querySelector('.mobile-nav-btn');
const headerEl = document.querySelector('.pb__header');

btnNavEl.addEventListener('click', function () {
  headerEl.classList.toggle('nav-open');
});
