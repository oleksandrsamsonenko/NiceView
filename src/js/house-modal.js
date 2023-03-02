(() => {
  const refs = {
    apartmentCards: document.querySelectorAll('[data-apartments]'),
    closeModalBtn: document.querySelector('[data-house-modal-close]'),
    modal: document.querySelector('[data-house-modal]'),
  };

  refs.apartmentCards.forEach(apartmentCard =>
    apartmentCard.addEventListener('click', toggleModal)
  );
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
