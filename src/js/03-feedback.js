const formEl = document.querySelector('.feedback-form');

const STORAGE_KEY = 'feedback-form-state';

formEl.addEventListener('input', onTextInput);
formEl.addEventListener('submit', onFormSubmit);

getStorageData();

const formData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};

function onTextInput(event) {
  formData[event.target.name] = event.target.value;

  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onFormSubmit(event) {
  event.preventDefault();

  const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY));
  console.log('Email:', savedData.email);
  console.log('Message:', savedData.message);

  event.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

function getStorageData() {
  const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY));

  if (savedData) {
    formEl.elements.email.value = savedData.email;
    formEl.elements.message.value = savedData.message;
  }
}
