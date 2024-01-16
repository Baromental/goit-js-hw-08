function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
}

const controls = document.getElementById('controls');
const createBtn = controls.querySelector('[data-create]');
const destroyBtn = controls.querySelector('[data-destroy]');
const boxesContainer = document.getElementById('boxes');

function createBoxes(amount) {
  destroyBoxes();
  const baseSize = 30;
  const step = 10;

  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    const size = baseSize + i * step;

    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();

    boxesContainer.appendChild(box);
  }
}

function destroyBoxes() {
  while (boxesContainer.firstChild) {
    boxesContainer.removeChild(boxesContainer.firstChild);
  }
}

createBtn.addEventListener('click', function () {
  const amount = parseInt(controls.querySelector('input').value, 10);

  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    controls.querySelector('input').value = '';
  }
});

destroyBtn.addEventListener('click', destroyBoxes);