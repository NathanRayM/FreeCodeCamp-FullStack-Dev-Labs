// Variables
const fullNameInput = document.querySelector("#full-name");
const emailInput = document.querySelector("#email");
const orderNumberInput = document.querySelector("#order-no");
const productCodeInput = document.querySelector("#product-code");
const quantityInput = document.querySelector("#quantity");
const complaintAll = document.querySelectorAll('[name="complaint"]');
const complaintGroup = document.querySelector("#complaints-group");
const otherComplaint = document.querySelector("#other-complaint");
const complaintDescription = document.querySelector("#complaint-description");
const solutionsAll = document.querySelectorAll('[name="solutions"]');
const solutionsGroup = document.querySelector("#solutions-group");
const solutionDescription = document.querySelector("#solution-description");
const otherSolution = document.querySelector("#other-solution");
const submitButton = document.getElementById("submit-btn");
const form = document.querySelector("#form");

// Regex Patterns
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const orderRegex = /^2024\d{6}$/;
const productRegex = /^[A-Za-z]{2}\d{2}-[A-Za-z]\d{3}-[A-Za-z]{2}\d$/;
const quantityRegex = /^[1-9]\d*$/;

// Validation function
function validateForm() {
  const fullNameValue = fullNameInput.value.trim();
  const isFullNameValid = fullNameValue !== "";
  const emailValue = emailInput.value.trim();
  const isEmailValid = emailPattern.test(emailValue);
  const orderNumberValue = orderNumberInput.value.trim();
  const isOrderNumberValid = orderRegex.test(orderNumberValue);
  const productCodeValue = productCodeInput.value.trim();
  const isProductCodeValid = productRegex.test(productCodeValue);
  const quantityValue = quantityInput.value.trim();
  const isQuantityValid = quantityRegex.test(quantityValue);
  const complaintArray = Array.from(complaintAll);
  const complaintIsChecked = complaintArray.some((cb) => cb.checked);
  const complaintDescriptionValue = complaintDescription.value.trim();
  const isComplaintDescriptionValid =
    !otherComplaint.checked || complaintDescriptionValue.length >= 20;
  const solutionsArray = Array.from(solutionsAll);
  const solutionIsChecked = solutionsArray.some((cb) => cb.checked);
  const solutionDescriptionValue = solutionDescription.value.trim();
  const isSolutionDescriptionValid =
    !otherSolution.checked || solutionDescriptionValue.length >= 20;

  return {
    "full-name": isFullNameValid,
    email: isEmailValid,
    "order-no": isOrderNumberValid,
    "product-code": isProductCodeValid,
    quantity: isQuantityValid,
    "complaints-group": complaintIsChecked,
    "complaint-description": isComplaintDescriptionValid,
    "solutions-group": solutionIsChecked,
    "solution-description": isSolutionDescriptionValid,
  };
}
// Name input event listener
fullNameInput.addEventListener("change", () => {
  const isValid = validateForm()["full-name"];
  if (isValid) {
    fullNameInput.style.borderColor = "green";
  } else {
    fullNameInput.style.borderColor = "red";
  }
});
// Email input event listener
emailInput.addEventListener("change", () => {
  const isValid = validateForm()["email"];
  if (isValid) {
    emailInput.style.borderColor = "green";
  } else {
    emailInput.style.borderColor = "red";
  }
});

// Order number event listener
orderNumberInput.addEventListener("change", () => {
  const isValid = validateForm()["order-no"];
  if (isValid) {
    orderNumberInput.style.borderColor = "green";
  } else {
    orderNumberInput.style.borderColor = "red";
  }
});

// Product code event listener
productCodeInput.addEventListener("change", () => {
  const isValid = validateForm()["product-code"];
  if (isValid) {
    productCodeInput.style.borderColor = "green";
  } else {
    productCodeInput.style.borderColor = "red";
  }
});

// Quantity event listener
quantityInput.addEventListener("change", () => {
  const isValid = validateForm()["quantity"];
  if (isValid) {
    quantityInput.style.borderColor = "green";
  } else {
    quantityInput.style.borderColor = "red";
  }
});

// Complaint reason event listener
complaintGroup.addEventListener("change", () => {
  const isChecked = validateForm()["complaints-group"];
  if (isChecked) {
    complaintGroup.style.borderColor = "green";
  } else {
    complaintGroup.style.borderColor = "red";
  }
});

// Other Complaint event listener
complaintDescription.addEventListener("change", () => {
  const isChecked = validateForm()["complaint-description"];
  if (isChecked) {
    complaintDescription.style.borderColor = "green";
  } else {
    complaintDescription.style.borderColor = "red";
  }
});

// Solutions event listener
solutionsGroup.addEventListener("change", () => {
  const isChecked = validateForm()["solutions-group"];
  if (isChecked) {
    solutionsGroup.style.borderColor = "green";
  } else {
    solutionsGroup.style.borderColor = "red";
  }
});
// Solution other event listener
solutionDescription.addEventListener("change", () => {
  const isChecked = validateForm()["solution-description"];
  if (isChecked) {
    solutionDescription.style.borderColor = "green";
  } else {
    solutionDescription.style.borderColor = "red";
  }
});

// Function to gather validation results
function isValid(validationResults) {
  return Object.values(validationResults).every((value) => value === true);
}

// Submit event listener
form.addEventListener("submit", (e) => {
  const results = validateForm();
  const allValid = isValid(results);

  if (!allValid) {
    e.preventDefault();

    const fieldMap = {
      "full-name": fullNameInput,
      email: emailInput,
      "order-no": orderNumberInput,
      "product-code": productCodeInput,
      quantity: quantityInput,
      "complaints-group": complaintGroup,
      "complaint-description": complaintDescription,
      "solutions-group": solutionsGroup,
      "solution-description": solutionDescription,
    };

    Object.entries(results).forEach(([fieldName, isFieldValid]) => {
      if (!isFieldValid) {
        fieldMap[fieldName].style.borderColor = "red";
      }
    });
  }
});
