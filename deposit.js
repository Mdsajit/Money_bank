//step add event listner to the deposit
document.getElementById('btn-deposit').addEventListener('click', function(){
    // console.log('deposit button clicked')
    //step 2 get the deposit amount from the deposit input
    const depositField = document.getElementById('deposit-field');
    const newDepositeAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositeAmountString);
    //step-3 get the deposit total
    //for non input element other than input textarea use innertext to get the text
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);
    const currentDepositTotal = previousDepositTotal + newDepositAmount;
    //add numbers to set up deposite
    depositTotalElement.innerText = currentDepositTotal;
    //step 5 
    const balanceTotalElement = document.getElementById("balance-total");
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);
    //step 6
    const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
    balanceTotalElement.innerText = currentBalanceTotal; 
    //step 7 clear the deposit field
    depositField.value = ""; 
})