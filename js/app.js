// Get Calculate Button 
document.getElementById('calculate-btn').addEventListener('click', function(){
    // get total Income 
    const incomeField = document.getElementById('total-income');
    const incomeValue = incomeField.value;
    const totalIncome = parseFloat(incomeValue);
    // console.log(totalIncome);
    if(totalIncome<0){
        incomeField.value = '';
        incomeField.placeholder = 'Nagative Value Not Accepted';
        incomeField.style.borderColor = 'red';
    }else if(isNaN(totalIncome)){
        incomeField.value = '';
        incomeField.placeholder = 'String Or Empty Not Accepted';
        incomeField.style.borderColor = 'red';
    }


    // get food cost 
    const foodCostField = document.getElementById('food-cost');
    const foodCostValue =  foodCostField.value;
    const foodCost = parseFloat(foodCostValue);

    if(foodCost<0){
        foodCostField.value = 'Enter Positive Number';
        foodCostField.style.borderColor = 'red';
    }else if(isNaN(foodCost)){
        foodCostField.value = 'Text Not Accepted';
        foodCostField.style.borderColor = 'red';
    }



    // get rent cost value 
    const rentCostField = document.getElementById('rent-cost');
    const rentCostValue =  rentCostField.value;
    const rentCost = parseFloat(rentCostValue);

    if(rentCost<0){
        rentCostField.value = 'Enter Positive Number';
        rentCostField.style.borderColor = 'red';
    }else if(isNaN(rentCost)){
        rentCostField.value = 'Text or Empty Not Accepted';
        rentCostField.style.borderColor = 'red';
    }

    // get clothe cost value 
    const clotheCostField = document.getElementById('clothe-cost');
    const clotheCostValue =  clotheCostField.value;
    const clotheCost = parseFloat(clotheCostValue);

    if(clotheCost<0){
        clotheCostField.value = 'Enter Positive Number';
        clotheCostField.style.borderColor = 'red';
    }else if(isNaN(clotheCost)){
        clotheCostField.value = 'Text Not Accepted';
        clotheCostField.style.borderColor = 'red';
    }


    // total Expenses
    const getTotalExpense = foodCost + rentCost + clotheCost;


    // get total expenses 
    const totalExpenseTxt = document.getElementById('total-expenses');
    const totalExpenseValue = totalExpenseTxt.innerText;
    totalExpenseTxt.innerText = getTotalExpense;

    const totalExpense = parseFloat(totalExpenseValue)

    // Balance Calculate
    const balanceTxt = document.getElementById('balance');
    const balanceValue = balanceTxt.innerText;
    const balance = parseFloat(balanceValue);


    // update balance 
    const updateBalance = totalIncome - getTotalExpense;
    balanceTxt.innerText = updateBalance;
})


document.getElementById('save-btn').addEventListener('click', function(){

    const saveingsParcentField = document.getElementById('saving-percent');
    const savingsParcentValue = saveingsParcentField.value;
    const savingsParcentAmount = parseFloat(savingsParcentValue)



    // saving parcent calculate     
        // get total Income 
    const incomeField = document.getElementById('total-income');
    const incomeValue = incomeField.value;
    const totalIncome = parseFloat(incomeValue);

    const savingsAmount = (totalIncome * savingsParcentAmount) / 100;
    console.log(savingsAmount);

    // updateSaveings
    const totalSaving = document.getElementById('saving-amount');
    totalSaving.innerText = savingsAmount;
    // const savingAmountValue = savingAmountId.innerText;
    // const totalSaving = parseFloat(savingAmountValue);
    // console.log(totalSaving);


})