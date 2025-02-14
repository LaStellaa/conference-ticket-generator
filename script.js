"use strict";

const fileInput = document.getElementById("file-upload");
const fileSize = document.querySelector(".upload-paragraph");
const fileErrorMessage = document.querySelector(".upload-paragraph-error");
const submitButton = document.querySelector("button");

const emailErrorMessage = document.querySelector(".email-error");
const fullName = document.getElementById("name");
const ticketFullName = document.getElementById("ticket-name");
const ticketEmail = document.getElementById("ticket-email");
const form = document.querySelector(".main-container");
const ticket = document.querySelector(".ticket-container");
const ticketBottomName = document.querySelector(".ticket-bottom-name");
const ticketGithubUsername = document.querySelector(".github-username");
const fileMaxSize = 500 * 1024; //500KB in bytes
const validEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

function capitalizeName(fullNameValue) {
  return fullNameValue
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}

submitButton.addEventListener("click", () => {
  console.log("button clicked");

  const email = document.getElementById("email").value;
  const username = document.getElementById("username").value;
  const fullNameValue = capitalizeName(fullName.value);
  // const bottomNameValue = fullName.value;
  const file = fileInput.files[0];

  if (!validEmail.test(email)) {
    emailErrorMessage.style.display = "flex";
  } else {
    emailErrorMessage.style.display = "none";
  }

  if (!file) {
    console.log("no file selected");
  } else if (file.size > fileMaxSize) {
    fileErrorMessage.style.display = "flex";
    fileSize.style.display = "none";
  }

  ticketFullName.textContent = fullNameValue;
  ticketEmail.textContent = email;
  ticketBottomName.textContent = fullNameValue;
  ticketGithubUsername.textContent = username;

  form.style.display = "none";
  ticket.style.display = "flex";
});
