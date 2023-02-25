const coach = document.getElementById('coach-input');
coach.style.width = '65%'

document.getElementById('player-calculate-btn').addEventListener('click', function () {
    budget();
})

document.getElementById('calculate-total-btn').addEventListener('click', function () {

    budget();

    const managerInput = stringToNum('manager-input');
    const coachInput = stringToNum('coach-input');
    const playerExpenses = document.getElementById('player-expenses');
    const playerExpensesString = playerExpenses.innerText;
    const playerExpensesNum = parseFloat(playerExpensesString);

    const calculateTotal = managerInput + coachInput + playerExpensesNum;

    if (isNaN(calculateTotal)) {
        alert('⚠️⚠️ 🚫page not found ⚠️⚠️ (3d)');
        return;
    }

    const total = document.getElementById('total');
    total.innerText = calculateTotal;
})