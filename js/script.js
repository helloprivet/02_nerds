/* Slider */

let slideButtons = document.querySelectorAll('.controls-button')

slideButtons.forEach(function (elem, i) {
  elem.addEventListener('click', function (evt) {
    evt.preventDefault();
    let currentButtonSlide = elem.dataset.name;
    let currentSlide = document.querySelector('.' + currentButtonSlide);

    document.querySelector('.current-slide').classList.remove('current-slide');
    currentSlide.classList.add('current-slide');

    document.querySelector('.current-button').classList.remove('current-button');
    elem.classList.add('current-button');
  });
});

/* Contacts Modal */

let contactsButton = document.querySelector('.contacts-button');
let contactsModal = document.querySelector('.modal-feedback');
let contactsModalClose = document.querySelector('.modal-close');

let contactsForm = contactsModal.querySelector('.feedback-form');
let contactsInputName = contactsModal.querySelector('.feedback-input-name');
let contactsInputEmail = contactsModal.querySelector('.feedback-input-email');
let contactsText = contactsModal.querySelector('.feedback-textarea');

let isStorageSupport = true;
let storageInputName = '';
let storageInputEmail = '';

try {
  storageInputName = localStorage.getItem('login');
  storageInputEmail = localStorage.getItem('email');
} catch (err) {
  isStorageSupport = false;
}

contactsButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  contactsModal.classList.add('modal-show');

  if (storageInputName && storageInputEmail) {
    contactsInputName.value = storageInputName;
    contactsInputEmail.value = storageInputEmail;
    contactsText.focus();
  } else {
    contactsInputName.focus();
  }
});

contactsModalClose.addEventListener('click', function (evt) {
  evt.preventDefault();
  contactsModal.classList.remove('modal-show');
  contactsModal.classList.remove('modal-error');
});

contactsForm.addEventListener('submit', function (evt) {
  if (!contactsInputName.value || !contactsInputEmail.value || !contactsText.value) {
    evt.preventDefault();
    contactsModal.classList.remove('modal-error');
    contactsModal.offsetWidth = contactsModal.offsetWidth;
    contactsModal.classList.add('modal-error');

  } else {
    if (isStorageSupport) {
      localStorage.setItem('login', contactsInputName.value)
      localStorage.setItem('email', contactsInputEmail.value)
    }
  }
});

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    if (contactsModal.classList.contains('modal-show')) {
      evt.preventDefault();
      contactsModal.classList.remove('modal-show');
      contactsModal.classList.remove('modal-error');
    }
  }
});







