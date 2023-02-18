// step 1: add event listeners to the widrow buttons
document.getElementById("btn_widrow").addEventListener("click", function(){
    // step 2: set the widrow about from the widrow input fields
    const widrowField = document.getElementById("widrow_field");
    const newWidrowAmountString = widrowField.value;
    const newWidrowAmount = parseFloat(newWidrowAmountString);
    
    // step 3: get previous widrow total 

    const widrowTotalElement = document.getElementById("widrow_total");
    const previusWidrowTotalString = widrowTotalElement.innerText;
    const previusWidrowTotal = parseFloat(previusWidrowTotalString);

    // step 4: calculate total widrow amount
    const currentWidrowTotal = previusWidrowTotal + newWidrowAmount;
    widrowTotalElement.innerText = currentWidrowTotal;

    // step 5: set total widrow amount
    const balanceTotalElement = document.getElementById("balance_total");
    const previousBalanceTotalString = balanceTotalElement.innerText; 
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    // step 6:calculate new balance total and set new balance total;
    const newBalanceTotal  = previousBalanceTotal - newWidrowAmount;
    balanceTotalElement.innerText = newBalanceTotal;

    


    // step 7: clear the input fields
    widrowField.value  = "";





})