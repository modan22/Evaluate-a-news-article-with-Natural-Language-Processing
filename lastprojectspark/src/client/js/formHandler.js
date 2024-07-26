import { checkForName } from './checkForName';

function handleSubmit(event) {
  event.preventDefault();
  let formText = document.getElementById('name').value;
  checkForName(formText);
  console.log("::: Form Submitted :::");

  fetch('http://localhost:8081/test')
    .then(res => res.json())
    .then(res => {
      document.getElementById('results').innerHTML = res.message;
    });
}
export { handleSubmit };
