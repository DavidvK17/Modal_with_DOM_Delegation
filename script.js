'use strict';

// get elements
const btnContainer = document.querySelector('.btn--container');
const overlay = document.querySelector('.overlay');
const closers = document.querySelectorAll('span');

btnContainer.addEventListener('click', function(e) {
  const selBtnCL = document.querySelector(
    `.modal-container--${e.target.dataset.btn}`
  );

  // Matching strategy
  if (e.target.classList.contains('btn')) {
    selBtnCL.classList.add('is--active');
    overlay.classList.add('is--active');

    const closeModal = () => {
      if (selBtnCL.classList.contains('is--active')) {
        selBtnCL.classList.remove('is--active');
        overlay.classList.remove('is--active');
      }
    };

    //   close on clicking on x
    closers.forEach(closer => closer.addEventListener('click', closeModal));

    //   close on clicking on overlay
    overlay.addEventListener('click', closeModal);

    //   close on pressing esc
    window.addEventListener('keydown', e => e.key === 'Escape' && closeModal());
  }
});
