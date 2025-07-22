console.log('app script loaded');
const form = document.getElementById('challengeForm');
const preview = document.getElementById('preview');

const descriptionField = document.getElementById('description');
descriptionField.addEventListener('input', () => {

  const raw = descriptionField.value;
  let formatted = raw
    .replace(/^### (.*$)/gim, '<h3>$1</h3>')
    .replace(/^## (.*$)/gim, '<h2>$1</h2>')
    .replace(/^# (.*$)/gim, '<h1>$1</h1>')
    .replace(/\*\*(.*?)\*\*/gim, '<b>$1</b>')
    .replace(/\*(.*?)\*/gim, '<i>$1</i>')
    .replace(/\n/gim, '<br />');

  preview.innerHTML = formatted;
});

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const data = {
    title: document.getElementById('title').value.trim(),
    description: document.getElementById('description').value.trim(),
    difficulty: document.getElementById('difficulty').value,
    testCases: document.getElementById('testCases').value.trim(),
    solution: document.getElementById('solution').value.trim()
  };

  try {
    JSON.parse(data.testCases);
  } catch (err) {
    alert("Test cases must be valid JSON format.");
    return;
  }

  console.log("Submitted Challenge Data:", data);
  alert("Challenge submitted successfully!");

  form.reset();
  preview.innerHTML = '';
});