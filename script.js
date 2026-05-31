const passwordInput = document.getElementById("passwordInput");
const togglePassword = document.getElementById("togglePassword");

const meterFill = document.getElementById("meterFill");
const statusText = document.getElementById("statusText");
const entropyText = document.getElementById("entropyText");
const crackText = document.getElementById("crackText");
const warningBanner = document.getElementById("warningBanner");

const lengthSlider = document.getElementById("lengthSlider");
const lengthValue = document.getElementById("lengthValue");

const uppercase = document.getElementById("uppercase");
const lowercase = document.getElementById("lowercase");
const numbers = document.getElementById("numbers");
const symbols = document.getElementById("symbols");

const generateBtn = document.getElementById("generateBtn");
const generatedPassword = document.getElementById("generatedPassword");
const copyBtn = document.getElementById("copyBtn");
const copyTooltip = document.getElementById("copyTooltip");

const commonPasswords = [
  "123456",
  "password",
  "123456789",
  "qwerty",
  "abc123",
  "111111",
  "123123",
  "admin",
  "letmein",
  "welcome"
];

passwordInput.addEventListener("input", () => {
  checkPasswordStrength(passwordInput.value);
});

togglePassword.addEventListener("click", () => {
  const isPassword = passwordInput.type === "password";

  passwordInput.type = isPassword ? "text" : "password";

  togglePassword.innerHTML = isPassword
    ? '<i class="fa-solid fa-eye-slash"></i>'
    : '<i class="fa-solid fa-eye"></i>';
});

lengthSlider.addEventListener("input", () => {
  lengthValue.textContent = lengthSlider.value;
});

generateBtn.addEventListener("click", () => {
  const password = generatePassword();
  generatedPassword.value = password;
});

copyBtn.addEventListener("click", async () => {
  if (!generatedPassword.value) return;

  await navigator.clipboard.writeText(generatedPassword.value);

  copyTooltip.textContent = "Copied!";

  setTimeout(() => {
    copyTooltip.textContent = "Copy";
  }, 1200);
});

function checkPasswordStrength(password) {
  if (password.length === 0) {
    updateUI(0, "Waiting", "0 bits", "0 seconds", "#ef4444");
    warningBanner.style.display = "none";
    return;
  }

  const lower = /[a-z]/.test(password);
  const upper = /[A-Z]/.test(password);
  const number = /[0-9]/.test(password);
  const symbol = /[^A-Za-z0-9]/.test(password);

  let poolSize = 0;

  if (lower) poolSize += 26;
  if (upper) poolSize += 26;
  if (number) poolSize += 10;
  if (symbol) poolSize += 32;

  const entropy = Math.round(password.length * Math.log2(poolSize || 1));

  let score = 0;

  if (password.length >= 8) score += 20;
  if (password.length >= 12) score += 20;
  if (lower) score += 15;
  if (upper) score += 15;
  if (number) score += 15;
  if (symbol) score += 15;

  let status = "Weak";
  let color = "#ef4444";
  let crackTime = "Few seconds";

  if (score >= 50) {
    status = "Medium";
    color = "#facc15";
    crackTime = "Few hours";
  }

  if (score >= 80) {
    status = "Strong";
    color = "#22c55e";
    crackTime = "200+ years";
  }

  const isCommon = commonPasswords.includes(password.toLowerCase());

  if (isCommon) {
    status = "Weak";
    score = 10;
    color = "#ef4444";
    crackTime = "Instantly";
    warningBanner.style.display = "block";
  } else {
    warningBanner.style.display = "none";
  }

  updateUI(score, status, `${entropy} bits`, crackTime, color);
}

function updateUI(score, status, entropy, crackTime, color) {
  meterFill.style.width = `${score}%`;
  meterFill.style.background = color;

  statusText.textContent = status;
  statusText.style.color = color;

  entropyText.textContent = entropy;
  crackText.textContent = crackTime;
}

function generatePassword() {
  const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowerChars = "abcdefghijklmnopqrstuvwxyz";
  const numberChars = "0123456789";
  const symbolChars = "!@#$%^&*()_+-=[]{}|;:,.<>?";

  let characters = "";

  if (uppercase.checked) characters += upperChars;
  if (lowercase.checked) characters += lowerChars;
  if (numbers.checked) characters += numberChars;
  if (symbols.checked) characters += symbolChars;

  if (characters.length === 0) {
    alert("Please select at least one option.");
    return "";
  }

  let password = "";

  for (let i = 0; i < Number(lengthSlider.value); i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }

  return password;
}