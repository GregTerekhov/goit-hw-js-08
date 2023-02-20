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
  try {
    const parsedData = localStorage.getItem(STORAGE_KEY);
    return parsedData === null ? undefined : JSON.parse(parsedData);
  } catch (error) {
    console.error(error.message);
  }

  if (localStorage.keys) {
    const formDataKeys = Object.entries(parsedData);
    formDataKeys.forEach(element => {
      form.querySelector(`[name = '${element}']`).value = parsedData[element];
    });
  }
}
