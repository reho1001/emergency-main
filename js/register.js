const form = document.querySelector("#webform");
function handleSubmit(event) {
  event.preventDefault();

  const firstNameValue = document.querySelector("#first_name").value;
  const firstNameOutput = document.querySelector("#first_name_output");
  firstNameOutput.textContent = firstNameValue;

  const lastNameValue = document.querySelector("#last_name").value;
  const lastNameOutput = document.querySelector("#last_name_output");
  lastNameOutput.textContent = lastNameValue;

  const emailValue = document.querySelector("#email").value;
  const emailOutput = document.querySelector("#email_output");
  emailOutput.textContent = emailValue;

  const beskedValue = document.querySelector("#besked").value;
  const beskedOutput = document.querySelector("#besked_output");
  beskedOutput.textContent = beskedValue;

  const termsValue = document.querySelector("#terms").value;
  const termsOutput = document.querySelector("#terms_output");
  termsOutput.textContent = termsValue;

  const formData = new FormData(form);

  form.reset();
}
form.addEventListener("submit", handleSubmit);

function cancelPopup(event) {
  event.preventDefault();
  form.querySelector(":user-invalid").focus();
}

form.addEventListener("invalid", cancelPopup, true);
