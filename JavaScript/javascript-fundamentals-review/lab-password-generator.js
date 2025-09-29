// lab-password-generator

//step 1

function generatePassword(passLength) {
  let password = "";
  let charSet =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
  for (let i = 0; i < passLength; i++) {
    let randomIndex = Math.floor(Math.random() * charSet.length);
    password += charSet[randomIndex];
  }
  return password;
}
const password = generatePassword(10);

console.log(`Generated password: ${password}`);

/*
EXPECTED OUTPUT

will return a random password each time 
Example Generated password: W(M!H7tPLU

*/
