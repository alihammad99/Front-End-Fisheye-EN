const modal = document.getElementById("contact_modal");

function displayModal() {
  modal.style.display = "block";
}

function closeModal() {
  modal.style.display = "none";
}
const handleSubmit = () => {
  const form = document.querySelector("form");

  const details = {
    firstName:
      "First name: " + form.querySelector('input[name="first-name"]').value,

    lastName:
      "Last name: " + form.querySelector('input[name="last-name"]').value,

    email: "Email: " + form.querySelector('input[name="email"]').value,

    message:
      "Your message: " + form.querySelector('input[name="message"]').value,
  };
  
  for (let i in details) {
    console.log(details[i]);
  }

  closeModal();
};
