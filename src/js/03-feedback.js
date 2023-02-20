import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';
const formData = {};
const parsedData = JSON.parse(localStorage.getItem(STORAGE_KEY));

outputData();

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onInputData), 500);

function onInputData(event) {
  formData[event.target.name] = event.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onFormSubmit(event) {
  event.preventDefault();
  event.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
  console.log(formData);
}

function outputData() {
  if (localStorage.keys) {
    const formDataKeys = Object.entries(parsedData);
    formDataKeys.map(element => {
      document.querySelector(`[name = '${element}']`).value =
        parsedData[element];
    });
  }
}
