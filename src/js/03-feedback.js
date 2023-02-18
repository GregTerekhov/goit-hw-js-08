import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');

const STORAGE_KEY = 'feedback-form-state';
const formData = {};
const parsedData = JSON.parse(localStorage.getItem(STORAGE_KEY));

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onInputData), 500);

outputData();

function onInputData(event) {
  formData[event.target.name] = event.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onFormSubmit(event) {
  event.preventDefault();
  event.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
  console.log(parsedData);
}

function outputData() {
  if (Object.keys(parsedData)) {
    formData.map(({ element }) => {
      document.querySelector(`[name = '${element}']`).value =
        parsedData[element];
    });
  }
}
