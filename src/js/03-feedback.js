import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';
const formData = {};

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
  console.log(formData);
  localStorage.removeItem(STORAGE_KEY);
}

function outputData() {
  let outputData = localStorage.getItem(STORAGE_KEY);
  if (outputData) {
    outputData = JSON.parse(outputData);
    Object.entries(formData).forEach(([name, value]) => {
      formData[name] = value;
      form.elements[name].value = value;
    });
  }
}
