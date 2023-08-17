document.getElementById('btn-withdraw').addEventListener('click', function(){

    const withdrawField = document.getElementById('withdraw-field');
    const newWithDrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithDrawAmountString);
    //step-7 clear the input field
    withdrawField.value = '';
    if (isNaN(newWithdrawAmount)) {
        alert('Please provide a valid number');
        return;
    }
    //step-3
    const withDrawTotalElement = document.getElementById('withdraw-total');
    const previousWithDrawTotalString = withDrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithDrawTotalString);
    
    //step-6
    const balanceTotalElement = document.getElementById('balance-total');
    const previuosBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previuosBalanceTotalString);

    if (newWithdrawAmount > previousBalanceTotal) {
        alert('Baper bank eto taka nai');
        return;
    }
    //step-4
    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    //step-5
    withDrawTotalElement.innerText = currentWithdrawTotal;
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotalElement.innerText = newBalanceTotal;
    
})