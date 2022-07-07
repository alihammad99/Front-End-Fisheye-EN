const modal = document.getElementById("contact_modal");

function displayModal() {
  modal.style.display = "block";
}

function closeModal() {
  modal.style.display = "none";
}
const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(e.formData);
  const form = document.querySelector("form");
  const firstName = console.log(
    "First name: " + form.querySelector('input[name="first-name"]').value
  );
  const lastName = console.log(
    "Last name: " + form.querySelector('input[name="last-name"]').value
  );
  const email = console.log(
    "Email: " + form.querySelector('input[name="email"]').value
  );
  const message = console.log(
    "Your message: " + form.querySelector('input[name="message"]').value
  );
  closeModal();
};
