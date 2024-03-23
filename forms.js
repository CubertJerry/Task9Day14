// JavaScript for HTML Forms
const formContainer = document.getElementById('form-container');

const formHTML = `
  <form id="myForm">
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" required>
    <label for="email">Email:</label>
    <input type="text" id="email" name="email" required>
    <label for="message">Message:</label>
    <textarea id="message" name="message" rows="4" required></textarea>
    <button type="submit">Submit</button>
  </form>
`;

formContainer.innerHTML = formHTML;

const form = document.getElementById('myForm');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  const formData = new FormData(form);
  const formDataObject = {};
  formData.forEach((value, key) => {
    formDataObject[key] = value;
  });
  console.log(formDataObject);
  // You can process the form data further as needed
});
	
