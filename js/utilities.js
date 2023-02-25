const playersSite = document.getElementById("players-site");

function selectedFive(playerName, btn) {
    if (playersSite.children.length == 5) {
        alert('the five players is selected.')
        alert('You can`t choose anymore.')
        return;
    }

    const playersName = document.getElementById(playerName);
    const playersNameString = playersName.innerText;
    const li = document.createElement('li');

    li.innerText = playersNameString;

    playersSite.appendChild(li);

    li.style.color = 'white';
    li.style.fontSize = '20px';
    li.style.padding = '5px';

    const selectBtn = document.getElementById(btn);
    selectBtn.setAttribute('disabled', true)
    selectBtn.style.backgroundColor = 'gray';
}

function budget() {
    const playerInputField = document.getElementById('player-input');
    const playerInputString = playerInputField.value;
    const playerInput = parseFloat(playerInputString);
    const playersSiteChild = playersSite.children.length;

    const calculateMultiply = playersSiteChild * playerInput;

    if (isNaN(calculateMultiply) || playersSiteChild === 0) {
        alert('please select the player or write the per player expenses')
        return;
    }

    const playerExpenses = document.getElementById('player-expenses');
    playerExpenses.innerText = calculateMultiply;
}

function stringToNum(elementId) {
    const inputField = document.getElementById(elementId);
    const InputFieldString = inputField.value;
    const inputFieldNum = parseFloat(InputFieldString);
    return inputFieldNum;
}