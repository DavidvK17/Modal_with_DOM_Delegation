'use strict';

// get elements
const btnContainer = document.querySelector('.btn--container');
const overlay = document.querySelector('.overlay');
const closers = document.querySelectorAll('span');

btnContainer.addEventListener('click', function(e) {
  const selBtnCL = document.querySelector(
    `.modal-container--${e.target.dataset.btn}`
  ).classList;

  // Matching strategy
  if (e.target.classList.contains('btn')) {
    selBtnCL.add('is--active');
    overlay.classList.add('is--active');
  }

  function closeModal() {
    if (selBtnCL.contains('is--active')) {
      selBtnCL.remove('is--active');
      overlay.classList.remove('is--active');
    }
  }

  //   close on clicking on x
  closers.forEach(closer => closer.addEventListener('click', closeModal));

  //   close on clicking on overlay
  overlay.addEventListener('click', closeModal);

  //   close on pressing esc
  window.addEventListener('keydown', function(e) {
    e.key === 'Escape' && closeModal();
  });
});
