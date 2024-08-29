let currentInput = '';
let currentOperator = '';
let currentOperand = '';

function appendToScreen(value) {
  const screen = document.getElementById('calc-screen');
  
  if (value === '.' && currentInput.includes('.')) return; 
  
  currentInput += value;
  screen.innerText = currentInput;
}

function clearScreen() {
  currentInput = '';
  document.getElementById('calc-screen').innerText = '0';
}

function calculate() {
  if (currentInput === '') return;
  
  try {
    const result = eval(currentInput);
    
    if (result === undefined) return;

    currentInput = result.toString();
    document.getElementById('calc-screen').innerText = currentInput;
  } catch (error) {
    document.getElementById('calc-screen').innerText = 'Error';
    currentInput = '';
  }
}
