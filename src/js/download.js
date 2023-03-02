(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-download-modal-open]'),
    closeModalBtn: document.querySelector('[data-download-modal-close]'),
    modal: document.querySelector('[data-download-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
