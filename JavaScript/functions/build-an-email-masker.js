// build-an-email-masker

function maskEmail(email) {
  let atIndex = email.indexOf("@");
  let userName = email.slice(0, atIndex);
  let domain = email.slice(atIndex);
  let maskedUsername =
    userName[0] +
    "*".repeat(userName.length - 2) +
    userName[userName.length - 1];
  return maskedUsername + domain;
}
let email = "apple.pie@example.com";

console.log(maskEmail(email));

/*
EXPECTED OUTPUT

a*******e@example.com
*/
