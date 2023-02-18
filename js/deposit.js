// step 1: add event listeners to the deposit button
document.getElementById("btn_deposit").addEventListener("click",function(){
    // step 2: get the amount from deposit input fields.
    // for input fields use the .value to the input field.
    const depositField = document.getElementById("deposit_field");
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);
    
    
    //step 3: get the deposit total amount
    // for non-input fields we use .innerText 
    const depositTotalElement = document.getElementById("deposit_total");
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);
    
    // step 4: add number to the total deposit.
    const currentDepositTotal = previousDepositTotal + newDepositAmount;
    // set the deposit total 
    depositTotalElement.innerText = currentDepositTotal;

    // step 5: get balance total value.
    const balanceTotalElement = document.getElementById("balance_total");
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    // step 6: calculate the current total balance
    const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
    // set the balance total.
    balanceTotalElement.innerText = currentBalanceTotal;








    // step 7: clear the deposit fields
    depositField.value ="";

    


    
})