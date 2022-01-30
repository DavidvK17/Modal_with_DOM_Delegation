'use strict';

// get elements

const btnContainer = document.querySelector('.btn--container');
const overlay = document.querySelector('.overlay');
const closers = document.querySelectorAll('span');

btnContainer.addEventListener('click', function(e) {
  // Matching strategy
  if (e.target.classList.contains('btn')) {
    document
      .querySelector(`.modal-container--${e.target.dataset.btn}`)
      .classList.add('is--active');
    overlay.classList.add('is--active');
  }

  function closeModal() {
    if (
      document
        .querySelector(`.modal-container--${e.target.dataset.btn}`)
        .classList.contains('is--active')
    ) {
      document
        .querySelector(`.modal-container--${e.target.dataset.btn}`)
        .classList.remove('is--active');
      overlay.classList.remove('is--active');
    }
  }

  //   close on clicking on x
  closers.forEach(closer => closer.addEventListener('click', closeModal));

  //   close on clicking on overlay
  overlay.addEventListener('click', closeModal);

  //   close on pressing esc
  window.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') closeModal();
  });
});
